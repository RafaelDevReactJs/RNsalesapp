import './side-bar.scss';

const menus = ['Home', 'Produto', 'Cadastros', 'Relatórios', 'Configurações', 'Sair'];

function SideBar() {

    return (
        <aside className='side-bar'>
            <ul>
                {menus.map(menu => <li key={menus.indexOf(menu)} name={menu}>{menu}</li>)}
            </ul>
        </aside>
    )
}

export default SideBar;