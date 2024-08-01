// A flexible wrapper component for rendering a section of content.
export default function Section({title , children ,...props}){
    return(
           // Render a <section> HTML element and spread any additional props onto it
    <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}