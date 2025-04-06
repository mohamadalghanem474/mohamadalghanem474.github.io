'use client'
/* eslint-disable prefer-const */

import { useEffect, useRef } from 'react'

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const width = window.innerWidth
    const height = window.innerHeight
    canvas.width = width
    canvas.height = height

    const stars = Array.from({ length: 120 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    }))

    const mouse = { x: width / 2, y: height / 2 }

    const draw = () => {
      ctx.fillStyle = '#0f172a' // same as bg-gray-900
      ctx.fillRect(0, 0, width, height)

      for (const s of stars) {
        const dx = (s.x - mouse.x) * 0.001
        const dy = (s.y - mouse.y) * 0.001
        s.x += dx * s.speed
        s.y += dy * s.speed

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
      }

      requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    window.addEventListener('mousemove', onMouseMove)
    draw()

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  )
}
