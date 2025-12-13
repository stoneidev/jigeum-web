import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Jigeum - K-Beauty Magazine';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#000',
          padding: '60px 80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              color: '#fff',
              fontFamily: 'Georgia, serif',
              marginBottom: 16,
            }}
          >
            Jigeum
          </div>
          <div
            style={{
              fontSize: 28,
              color: '#EC4899',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            The K-Beauty Magazine
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 36, color: '#9CA3AF' }}>
            Discover trending Korean skincare & makeup
          </div>
          <div style={{ fontSize: 28, color: '#6B7280' }}>
            COSRX • Beauty of Joseon • Anua • TIRTIR • Laneige
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontSize: 24, color: '#6B7280' }}>jigeum.today</div>
          <div style={{ fontSize: 20, color: '#4B5563' }}>Issue 01 • December 2025</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
