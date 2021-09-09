import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SidebarLink = styled(Link)`
display:flex;
color:#e1e9fc
`
const sidebarLabel = styled.span ``

const SubMenu =({item}) => {
    return (
<>
<SidebarLink to={item.path}>
    <div>
        {item.icon}
        <sidebarLabel>{item.title}</sidebarLabel>
    </div>
</SidebarLink>
</>
)
}

export default SubMenu;