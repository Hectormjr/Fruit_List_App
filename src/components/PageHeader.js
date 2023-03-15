import './styles.css'

export default function PageHeader({ title, subtitle }) {
    return (

        <div id='header-container' className="pageHeader">
            <h2 id='header-title'
                style={{
                    marginTop: '5px',
                    marginBottom: '5px'
                }}>
                {title}
            </h2>
            <small id='header-subtitle'>
                {subtitle}
            </small>

        </div >
    )
}