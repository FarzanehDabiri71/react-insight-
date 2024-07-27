// A flexible wrapper component for rendering a section of content.
export default function Section({title , children ,...props}){
    return(
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    )
}