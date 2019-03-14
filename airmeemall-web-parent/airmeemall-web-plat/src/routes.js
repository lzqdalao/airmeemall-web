import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'

import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import user from './views/nav1/user.vue'
import Brands from './views/product/Brands.vue'
import ProductType from './views/product/ProductType.vue'
import Product from './views/product/Product.vue'
import Page4 from './views/nav2/Page4.vue'
import Page5 from './views/nav2/Page5.vue'
import Page6 from './views/nav3/Page6.vue'
import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'el-icon-menu',
        leaf: true,//只有一个节点
        children: [
            { path: '/echarts', component: echarts, name: '首页' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '平台管理',
        iconCls: 'el-icon-setting',
        children: [
            { path: '/page4', component: Page4, name: '基础模块' },
            { path: '/page5', component: Page5, name: '权限' },
            { path: '/page5', component: Page5, name: '会员' },
            { path: '/page5', component: Page5, name: '店铺' },
            { path: '/page5', component: Page5, name: '交易' },
            { path: '/page5', component: Page5, name: '财务' },
            { path: '/page5', component: Page5, name: '营销推广/促销活动' },
            { path: '/page5', component: Page5, name: '信息内容' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '商品管理',
        iconCls: 'el-icon-tickets',
        children: [
            { path: '/Brands', component: Brands, name: '品牌管理' },
            { path: '/ProductType', component: ProductType, name: '商品类型' },
            { path: '/Product', component: Product, name: '商品管理' },
            { path: '/page4', component: Page4, name: '属性管理' },
            { path: '/page5', component: Page5, name: '媒体属性' },
            { path: '/page6', component: Page6, name: '商品SKU' },
            { path: '/Form', component: Form, name: '显示属性' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '支付中心',
        iconCls: 'el-icon-goods',
        children: [
            { path: '/page4', component: Page4, name: '三方支付集成' },
            { path: '/page5', component: Page5, name: '账户充值' },
            { path: '/page5', component: Page5, name: '订单支付' },
            { path: '/page5', component: Page5, name: '订单退款' },
            { path: '/page5', component: Page5, name: '支付流水' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;