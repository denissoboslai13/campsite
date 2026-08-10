import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const deployHookUrl = process.env.VERCEL_DEPLOY_HOOK_URL

  if (!deployHookUrl) {
    return res.status(500).json({ error: 'Missing VERCEL_DEPLOY_HOOK_URL env variable' })
  }

  const response = await fetch(deployHookUrl, { method: 'POST' })

  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to trigger deploy' })
  }

  res.status(200).json({ triggered: true })
}