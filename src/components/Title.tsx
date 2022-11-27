import React from "react"
import { createPortal } from "react-dom"

type TitleProps = {
    children: React.ReactNode,
    size?: "small"| "large"
}

type ColorDefault = {
    color?: string
}

export const Paragraph = ({children, size, color = "large"} :TitleProps & ColorDefault) => {
    return(
        <h1
        style={{
            fontSize: size == "small" ? "1.5rem" : "8rem",
            color: color
            
        }}
     >{children}</h1>
    )
}

 export const Title = ({children, size = "large"} :TitleProps) => {
    return(
     <h1
        style={{
            fontSize: size == "small" ? "1.5rem" : "8rem"
        }}
     >{children}</h1>
    )
}