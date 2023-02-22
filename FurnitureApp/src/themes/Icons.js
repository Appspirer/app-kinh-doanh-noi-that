import React from "react";
import categories from '../assets/svgs/categories.svg'
import categories_focus from '../assets/svgs/categories_focus.svg'
import heart from '../assets/svgs/heart.svg'
import heart_focus from '../assets/svgs/heart_focus.svg'
import home from '../assets/svgs/home.svg'
import home_focus from '../assets/svgs/home_focus.svg'
import list from '../assets/svgs/list.svg'
import list_focus from '../assets/svgs/list_focus.svg'
import logo from '../assets/svgs/logo.svg'
import cart from '../assets/svgs/cart.svg'
import search from '../assets/svgs/search.svg'
import star from '../assets/svgs/star.svg'
import vr from '../assets/svgs/vr.svg'
import back from '../assets/svgs/back.svg'
import share from '../assets/svgs/share.svg'
import check from '../assets/svgs/check.svg'
import heart_blue from '../assets/svgs/heart_blue.svg'

const SVGs = {
    categories,
    categories_focus,
    heart,
    heart_focus,
    home,
    home_focus,
    list,
    list_focus,
    logo,
    cart,
    search,
    star,
    vr,
    back,
    share,
    check,
    heart_blue
}

export default {
    Icons: ({ name = "", height, width }) => {
        if (name in SVGs) {
            const Icons = SVGs[name]
            return <Icons name={name} height={height} width={width} />
        } else {
            return null
        }
    }
}