import { ButtonR, ButtonW } from "./styles"


function Button({ children, red, ...rest }) {
    return (

        <>{red ? (
            <ButtonR {...rest}>{children}</ButtonR>
        ) : (
            <ButtonW {...rest}>{children}</ButtonW>
        )
        }

        </>

    )
}

export default Button