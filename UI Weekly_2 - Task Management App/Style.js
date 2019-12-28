const fonts = {
    medium: {
        fontFamily: 'sf-medium',
    },
    bold: {
        fontFamily: 'sf-bold'
    }
}

const styles = {
    containerTop: {
        flex: 0,
    },
    container: {
        flex: 1,
        backgroundColor: '#F3F6FF'
    },
    headerWrapper: {
        backgroundColor: '#fff',
        paddingVertical: 20,
        paddingHorizontal: 25,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    headerTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerBottom: {
        paddingVertical: 10,
    },
    header_BottomTitleWrap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    header_ChooseLayout: {
        flexDirection: 'row',
        backgroundColor: '#F3F6FF',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10
    },
    header_ChooseLayout_divider: {
        height: 13,
        width: 1,
        backgroundColor: '#BAC5E9',
        marginHorizontal: 8
    },
    header_bottomTitle: {
        ...fonts.bold,
        fontSize: 38,
        color: '#2C3550'
    },
    header_NavigationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20
    },
    header_NavItem: {
        ...fonts.medium,
        color: '#2C3550',
        fontSize: 18
    },
    header_NavItemActive: {
        color: '#3E80FF'
    },

    mainBottom: {
        flex: 1,
        backgroundColor: '#F3F6FF'
    },
    header_SearchWrapper: {
        backgroundColor: '#F3F6FF',
        flexDirection: 'row',
        borderRadius: 5,
        padding: 10
    },
    header_SearchInput: {
        ...fonts.medium,
        marginLeft: 10,
        fontSize: 16,
    },
    bottomNavigation: {
        backgroundColor: '#F3F6FF',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingBottom: 10
    },
    bottomNavigation_item: {
        
    }
    
}

export default styles;