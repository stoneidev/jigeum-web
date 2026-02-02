import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');
    const limit = searchParams.get('limit') || '10';

    if (!query) {
        return NextResponse.json(
            { error: 'Query parameter "q" is required' },
            { status: 400 }
        );
    }

    try {
        const redditUrl = `https://www.reddit.com/search.json?q=${encodeURIComponent(query)}&limit=${limit}`;

        const response = await fetch(redditUrl, {
            headers: {
                'User-Agent': 'JigeumWeb/0.1.0 (Next.js 16; +https://jigeum.today)',
            },
            next: { revalidate: 3600 }, // Cache for 1 hour
        });

        if (!response.ok) {
            return NextResponse.json(
                { error: 'Failed to fetch data from Reddit' },
                { status: response.status }
            );
        }

        const data = await response.json();

        // Clean and transform the data
        const results = data.data.children.map((child: any) => ({
            id: child.data.id,
            title: child.data.title,
            author: child.data.author,
            subreddit: child.data.subreddit_name_prefixed,
            url: `https://www.reddit.com${child.data.permalink}`,
            score: child.data.score,
            num_comments: child.data.num_comments,
            created_utc: child.data.created_utc,
            thumbnail: child.data.thumbnail !== 'self' && child.data.thumbnail !== 'default' ? child.data.thumbnail : null,
            selftext: child.data.selftext.substring(0, 200) + (child.data.selftext.length > 200 ? '...' : ''),
        }));

        return NextResponse.json({
            query,
            count: results.length,
            results,
        });
    } catch (error) {
        console.error('Reddit search error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
