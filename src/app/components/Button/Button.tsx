import style from '../Button/Button.module.css'

interface Props {
    children: React.ReactNode
}

const Button = ({children}: Props) => {
    return(
        <>
            <div className={style.button}>
                {children}
            </div>
        </>
    )
}

export default Button