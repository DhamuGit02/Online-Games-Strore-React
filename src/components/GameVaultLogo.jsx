import GameVaultLogoImage from '../images/game-vault-logo-new-2.png'
function GameVaultLogo({ width, height }) {
    return (
        <div className="logo">
            <img src={GameVaultLogoImage} alt="logo" width={width} height={height} />
        </div>
    )
}
GameVaultLogo.defaultProps = {
    width: 45,
    height: 45
}
export default GameVaultLogo