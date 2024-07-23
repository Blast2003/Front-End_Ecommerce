import { Col } from 'antd'
import React from "react";
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall } from './style';

import {
    UserOutlined, CaretDownOutlined, ShoppingCartOutlined
} from '@ant-design/icons'
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent =() =>{
    return(
        <div>
            <WrapperHeader>
                <Col span={6}>
                    <WrapperTextHeader>LAPTRINHTHATDE</WrapperTextHeader>
                </Col>
                <Col span={12}>
                <ButtonInputSearch
                bordered = {false}
                placeholder="input search text"
                size="large"
                textButton="Search"
                
                />
                </Col>
                <Col span={6} style={{display: 'flex', gap: '20px', alignItems: "center"}}>
                    <WrapperHeaderAccount>
                        <UserOutlined style={{fontSize : '30px'}} />
                        <div>
                            <WrapperTextHeaderSmall>Log-in/Sign-up</WrapperTextHeaderSmall>
                            <div>
                                <WrapperTextHeaderSmall>Account</WrapperTextHeaderSmall>
                                <CaretDownOutlined />
                            </div>
                        </div>
                    </WrapperHeaderAccount>
                    <div>
                        <ShoppingCartOutlined style={{fontSize: '30px', color: '#fff'}} />
                        <WrapperTextHeaderSmall>Shopping Cart</WrapperTextHeaderSmall>
                    </div>
                </Col>
            </WrapperHeader>
        </div>
    )
}

export default HeaderComponent