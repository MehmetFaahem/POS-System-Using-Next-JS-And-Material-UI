import React from 'react'

function SideNav(props) {

    return (
        <div>
            <div style={{ width: props.width, paddingTop: '20px', visibility: props.vg }}>
                <a href="javascript:void(0)" class="closebtn" onclick={() => closeNav()}>&times;</a>
                <a href="#">About</a>
                <a href="#">Services</a>
                <a href="#">Clients</a>
                <a href="#">Contact</a>
            </div>
        </div>
    )

}


export default SideNav