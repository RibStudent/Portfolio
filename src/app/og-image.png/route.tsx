import { ImageResponse } from 'next/og'
import { DATA } from '@/data/resume'

export const runtime = 'edge'

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000',
            backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '40px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <h1
              style={{
                fontSize: '60px',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '10px',
                textAlign: 'center',
              }}
            >
              {DATA.name}
            </h1>
            <h2
              style={{
                fontSize: '30px',
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '20px',
                textAlign: 'center',
              }}
            >
              Cybersecurity Specialist & AI Developer
            </h2>
            <p
              style={{
                fontSize: '20px',
                color: 'rgba(255, 255, 255, 0.8)',
                textAlign: 'center',
                maxWidth: '800px',
              }}
            >
              Bridging cutting-edge AI technology with practical business solutions
            </p>
            <div
              style={{
                display: 'flex',
                gap: '20px',
                marginTop: '30px',
              }}
            >
              <span
                style={{
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '10px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                }}
              >
                Brisbane, QLD
              </span>
              <span
                style={{
                  fontSize: '18px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '10px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                }}
              >
                rhysthomas.dev
              </span>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}