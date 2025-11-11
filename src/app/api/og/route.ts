import { ImageResponse } from '@vercel/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background:
            'linear-gradient(135deg, rgba(42,166,255,0.18), rgba(124,58,237,0.18)), #0b0b0b',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            borderRadius: 24,
            color: 'white',
            fontSize: 56,
            fontWeight: 700,
          }}
        >
          <div style={{ fontSize: 28, opacity: 0.7, marginBottom: 12 }}>Full?Stack Portfolio</div>
          <div style={{ background: 'linear-gradient(90deg,#2aa6ff,#7c3aed 60%,#22c55e)', WebkitBackgroundClip: 'text', color: 'transparent' }}>Modern ? Minimal ? Bold</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
