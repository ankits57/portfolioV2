"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function CreativeHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let devicePixelRatio: number

        const setCanvasDimensions = () => {
            devicePixelRatio = window.devicePixelRatio || 1
            const rect = canvas.getBoundingClientRect()
            canvas.width = rect.width * devicePixelRatio
            canvas.height = rect.height * devicePixelRatio
            ctx.scale(devicePixelRatio, devicePixelRatio)
        }

        setCanvasDimensions()
        window.addEventListener("resize", setCanvasDimensions)

        let mouseX = 0
        let mouseY = 0
        let targetX = 0
        let targetY = 0
        let isInteracting = false

        const getEventCoordinates = (e: MouseEvent | TouchEvent) => {
            const rect = canvas.getBoundingClientRect()
            let clientX: number, clientY: number

            if (e.type.startsWith("touch")) {
                const touchEvent = e as TouchEvent
                if (touchEvent.touches.length > 0) {
                    clientX = touchEvent.touches[0].clientX
                    clientY = touchEvent.touches[0].clientY
                } else if (touchEvent.changedTouches.length > 0) {
                    clientX = touchEvent.changedTouches[0].clientX
                    clientY = touchEvent.changedTouches[0].clientY
                } else {
                    return
                }
            } else {
                const mouseEvent = e as MouseEvent
                clientX = mouseEvent.clientX
                clientY = mouseEvent.clientY
            }

            targetX = clientX - rect.left
            targetY = clientY - rect.top
        }

        const handleMouseMove = (e: MouseEvent) => {
            isInteracting = true
            getEventCoordinates(e)
            createRipple(targetX, targetY)
        }

        const handleMouseLeave = () => {
            isInteracting = false
        }

        const handleTouchStart = (e: TouchEvent) => {
            e.preventDefault()
            isInteracting = true
            getEventCoordinates(e)
            createRipple(targetX, targetY)
        }

        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault()
            isInteracting = true
            getEventCoordinates(e)
            createRipple(targetX, targetY)
        }

        const handleTouchEnd = (e: TouchEvent) => {
            e.preventDefault()
            isInteracting = false
        }

        canvas.addEventListener("mousemove", handleMouseMove)
        canvas.addEventListener("mouseleave", handleMouseLeave)
        canvas.addEventListener("touchstart", handleTouchStart, { passive: false })
        canvas.addEventListener("touchmove", handleTouchMove, { passive: false })
        canvas.addEventListener("touchend", handleTouchEnd, { passive: false })

        class Particle {
            x: number
            y: number
            size: number
            baseX: number
            baseY: number
            density: number
            color: string
            distance: number

            constructor(x: number, y: number) {
                this.x = x
                this.y = y
                this.baseX = x
                this.baseY = y
                this.size = Math.random() * 2.5 + 0.8
                this.density = Math.random() * 20 + 1
                this.distance = 0

                const hue = Math.random() * 60 + 180
                this.color = `hsl(${hue}, 70%, 60%)`
            }

            update() {
                if (!isInteracting) {
                    if (this.x !== this.baseX) {
                        const dx = this.x - this.baseX
                        this.x -= dx / 15
                    }
                    if (this.y !== this.baseY) {
                        const dy = this.y - this.baseY
                        this.y -= dy / 15
                    }
                    return
                }

                const dx = mouseX - this.x
                const dy = mouseY - this.y
                this.distance = Math.sqrt(dx * dx + dy * dy)

                const forceDirectionX = dx / this.distance
                const forceDirectionY = dy / this.distance

                const maxDistance = window.innerWidth < 768 ? 80 : 100
                const force = (maxDistance - this.distance) / maxDistance

                if (this.distance < maxDistance) {
                    const directionX = forceDirectionX * force * this.density * 0.8
                    const directionY = forceDirectionY * force * this.density * 0.8

                    this.x -= directionX
                    this.y -= directionY
                } else {
                    if (this.x !== this.baseX) {
                        const dx = this.x - this.baseX
                        this.x -= dx / 15
                    }
                    if (this.y !== this.baseY) {
                        const dy = this.y - this.baseY
                        this.y -= dy / 15
                    }
                }
            }

            draw() {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.fillStyle = this.color
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.beginPath()
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.closePath()
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                ctx.fill()
            }
        }

        const particlesArray: Particle[] = []
        const isMobile = window.innerWidth < 768
        const gridSize = isMobile ? 20 : 18

        function init() {
            particlesArray.length = 0

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const canvasWidth = canvas.width / devicePixelRatio
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const canvasHeight = canvas.height / devicePixelRatio

            const numX = Math.floor(canvasWidth / gridSize)
            const numY = Math.floor(canvasHeight / gridSize)

            for (let y = 0; y < numY; y++) {
                for (let x = 0; x < numX; x++) {
                    const posX = x * gridSize + gridSize / 2
                    const posY = y * gridSize + gridSize / 2
                    particlesArray.push(new Particle(posX, posY))
                }
            }
        }

        init()

        // Ripple effect
        interface Ripple {
            x: number
            y: number
            radius: number
            maxRadius: number
        }

        const ripples: Ripple[] = []

        function createRipple(x: number, y: number) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const canvasWidth = canvas.width / devicePixelRatio
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const canvasHeight = canvas.height / devicePixelRatio
            const maxRadius = Math.sqrt(canvasWidth * canvasWidth + canvasHeight * canvasHeight)
            ripples.push({ x, y, radius: 0, maxRadius })
        }

        function updateRipples() {
            for (let i = ripples.length - 1; i >= 0; i--) {
                const ripple = ripples[i]
                ripple.radius += 6

                for (const p of particlesArray) {
                    const dx = p.x - ripple.x
                    const dy = p.y - ripple.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (Math.abs(distance - ripple.radius) < 10) {
                        const angle = Math.atan2(dy, dx)
                        const force = (10 - Math.abs(distance - ripple.radius)) / 10
                        const offset = force * 15

                        p.x += Math.cos(angle) * offset
                        p.y += Math.sin(angle) * offset
                    }
                }

                if (ripple.radius > ripple.maxRadius) {
                    ripples.splice(i, 1)
                }
            }
        }

        function drawParticles() {
            for (let i = 0; i < particlesArray.length; i++) {
                particlesArray[i].update()
                particlesArray[i].draw()
            }
        }

        function drawConnections() {
            const connectionDistance = isMobile ? 20 : 22
            const maxConnections = isMobile ? 4 : 6

            for (let i = 0; i < particlesArray.length; i++) {
                let connectionCount = 0
                for (let j = i + 1; j < particlesArray.length && connectionCount < maxConnections; j++) {
                    const dx = particlesArray[i].x - particlesArray[j].x
                    const dy = particlesArray[i].y - particlesArray[j].y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.beginPath()
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.strokeStyle = `rgba(100, 200, 255, ${0.12 - distance / 180})`
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.lineWidth = 0.3
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-expect-error
                        ctx.stroke()
                        connectionCount++
                    }
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio)

            if (isInteracting) {
                mouseX += (targetX - mouseX) * 0.12
                mouseY += (targetY - mouseY) * 0.12
            }

            updateRipples()
            drawParticles()
            drawConnections()

            requestAnimationFrame(animate)
        }

        animate()

        // Auto-ripple loop with one-at-a-time logic
        let autoRippleTimeout: number

        const scheduleAutoRipple = () => {
            if (ripples.length === 0) {
                const w = canvas.width / devicePixelRatio
                const h = canvas.height / devicePixelRatio
                const randX = Math.random() * w
                const randY = Math.random() * h
                createRipple(randX, randY)
            }
            autoRippleTimeout = window.setTimeout(scheduleAutoRipple, 2000)
        }

        scheduleAutoRipple()

        const handleResize = () => {
            setCanvasDimensions()
            setTimeout(init, 100)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            clearTimeout(autoRippleTimeout)
            window.removeEventListener("resize", handleResize)
            canvas.removeEventListener("mousemove", handleMouseMove)
            canvas.removeEventListener("mouseleave", handleMouseLeave)
            canvas.removeEventListener("touchstart", handleTouchStart)
            canvas.removeEventListener("touchmove", handleTouchMove)
            canvas.removeEventListener("touchend", handleTouchEnd)
        }
    }, [])

    return (
        <motion.div
            className="w-full h-[400px] md:h-[500px] relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <canvas
                ref={canvasRef}
                className="w-full h-full touch-none"
                style={{ display: "block" }}
            />
        </motion.div>
    )
}
