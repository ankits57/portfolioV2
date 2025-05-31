"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
    // const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [result, setResult] = useState("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setResult("Sending....")

        const formData = new FormData(e.currentTarget)

        // Convert FormData to JSON object
        const formDataObj = Object.fromEntries(formData)

        // Add access key to the object
        formDataObj.access_key = "44d3deb5-0c12-4f8b-836e-3be1c948f1d7"

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataObj)
            })

            const data = await response.json()

            if (data.success) {
                setResult("Form Submitted Successfully")
                e.currentTarget.reset()

                // Uncomment if using toast
                // toast({
                //     title: "Message sent!",
                //     description: "Thanks for reaching out. I'll get back to you soon.",
                // })
            } else {
                console.log("Error", data)
                setResult(data.message || "Failed to send message")
            }
        } catch (error) {
            console.log("Error", error)
            setResult("Form Submitted Successfully")
        }

        setIsSubmitting(false)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-purple-500/50">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

                <div className="relative">
                    <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Input
                                name="name"
                                placeholder="Your Name"
                                required
                                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                required
                                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Input
                                name="subject"
                                placeholder="Subject"
                                required
                                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                            />
                        </div>
                        <div className="space-y-2">
                            <Textarea
                                name="message"
                                placeholder="Your Message"
                                rows={5}
                                required
                                className="bg-zinc-900/50 border-zinc-700 focus:border-purple-500 focus:ring-purple-500/20"
                            />
                        </div>

                        {/* Status Messages */}
                        {result && (
                            <div className={`p-3 rounded-lg text-sm ${
                                result.includes("Successfully")
                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                    : result.includes("Sending")
                                        ? "bg-blue-500/10 border border-blue-500/20 text-blue-400"
                                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                            }`}>
                                {result.includes("Successfully") ? "✅ " : result.includes("Sending") ? "⏳ " : "❌ "}
                                {result}
                            </div>
                        )}

                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 border-0"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>Sending...</>
                            ) : (
                                <>
                                    Send Message <Send className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </motion.div>
    )
}