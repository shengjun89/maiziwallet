CarouselComponent = require "carouselcomponent/CarouselComponent"
imageFill = require "imagefill/imageFill"
{StatusBar} = require "StatusBar"
{Button} = require "Button"
{IconsNavBar} = require "IconsNavBar"
{AnnounceBar} = require "AnnounceBar"
{ProductList} = require "ProductList"
{ListWithIcon} = require "ListWithIcon"
{LoanCard} = require "LoanCard"
{countup} = require "npm"
{Adapt} = require "Adapt"

Adapt.setBreakpoints
	small: 600
	medium: 800
	large: 1200
Adapt.fontSize =
	small: 48
	medium: 64
	large: 96
	other: 128
		
Adapt.text =
	small: "Tiny"
	medium: "Smallish"
	large: "Normal"
	other: "Huge!"
n = Screen.width/750	
	
primaryColor = "#F7452A"
defaultColor = "#9e9e9e"
Screen.backgroundColor="#FAFAFA"
# Springs缓动预定义
iOSAppLaunch = "spring(320,40,0)"
iOSKeyboard = "spring(280,33,10)"
iOSSlideView = "spring(220,28,0)"
iOSRetreat = "spring(220,28,0)"
iOSActionSheet = "spring(280,33,10)"

materialAppLaunch = "spring(260,32,16)"
materialKeyboard = "spring(220,35,25)"
materialSlideView = "spring(220,35,25)"
materialRetreat = "spring(160,30,10)"
materialActionSheet = "spring(250,37,20)"

floaty = "spring(160,40,10)"
hello = "spring(400,22,20)"
retreat = "spring(160,30,10)"
pop = "spring(280,13,10)"
bigPop = "spring(370,8,0)"
dramatic = "spring(120,140,0)"
slow = "spring(100,50,0)"
quick = "spring(400,20,10)"
loose = "spring(240,18,28)"


# 全局数据	
BottomBarData = [{src:"images/bottom_navIcon_nor1@2x.svg",name:"首页",current:"images/bottom_navIcon_sel1@2x.svg";},{src:"images/bottom_navIcon_nor2@2x.svg",name:"商城",current:"images/bottom_navIcon_sel2@2x.svg";},{src:"images/bottom_navIcon_nor3@2x.svg",name:"管家",current:"images/bottom_navIcon_sel3@2x.svg";},{src:"images/bottom_navIcon_nor4@2x.svg",name:"借款",current:"images/bottom_navIcon_sel4@2x.svg";},{src:"images/bottom_navIcon_nor5@2x.svg",name:"我的",current:"images/bottom_navIcon_sel5@2x.svg";}]


MainPageArr = []
for i in [0..BottomBarData.length]
	Page = new Layer
		width: Screen.width
		height: Screen.height
		backgroundColor: null
		visible: false
# 	StatusBar = new StatusBar	
	MainPageArr.push(Page)
BottomBar = new Layer
	width: Screen.width
	height: 96*n
	y: Align.bottom
	backgroundColor: "#FFF"
	opacity: 0.8
	shadowY: -1
	shadowColor: "rgba(0,0,0,0.12)"

BottomBarNavArr = []
BottomBarNavIconArr = []
BottomBarNavIconCurArr = []
BottomBarNavNamesArr = []

for i in [0...BottomBarData.length]
	BottomBarNav = new Layer
		parent: BottomBar
		width: Screen.width/BottomBarData.length
		x: Screen.width/BottomBarData.length*i
		backgroundColor: "#FFF"
	
	BottomBarNavIconCurrent = new Layer
		parent: BottomBarNav
		width: 48*n
		height: 48*n
		x: Align.center
		y: 12
		backgroundColor: null
		image: 	BottomBarData[i].current
		opacity: 0
		
	BottomBarNavIcon = new Layer
		parent: BottomBarNav
		width: 48*n
		height: 48*n
		x: Align.center
		y: 12
		backgroundColor: null
		image: 	BottomBarData[i].src
		
	NavName = new TextLayer
		parent: BottomBarNav
		y: 60*n
		width: Screen.width/BottomBarData.length
		fontSize: 22*n
		textAlign: "center"
		color: defaultColor
		text: BottomBarData[i].name			
	BottomBarNavArr.push(BottomBarNav)
	BottomBarNavIconArr.push(BottomBarNavIcon)
	BottomBarNavIconCurArr.push(BottomBarNavIconCurrent)
	BottomBarNavNamesArr.push(NavName)



# 首页
#头部导航栏




StatusBar = new StatusBar
StatusBar.pageTitle.text = "麦子钱包"
StatusBar.topbarLeftIcon01.visible = false	
StatusBar.parent = MainPageArr[0]
MainPageArr[0].visible = true
homeScroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	

# 图标导航
navIconsData = [{src:"images/nav_icon01.svg",name:"租房分期";},{src:"images/nav_icon02.svg",name:"教育分期";},{src:"images/nav_icon03.svg",name:"额度分期";},{src:"images/nav_icon04.svg",name:"一枚分期";}]

# 滑动banner
navIcons = []
itembg = ["images/images/items0.png","images/images/items1.png","images/images/items2.png"]



#banner
TopBanRedBg = new VideoLayer
	parent: homeScroll.content
	y: StatusBar.topbar.height+StatusBar.topbar.y
	width: Screen.width
	height: 296*n
	html: "<div style='background: linear-gradient(45deg, #EA3C35,#FF9743);height:296px;filter:hue-rotate(0deg);'></div>"
	backgroundColor: null

TopBanRedBg.placeBefore(iconNavGroup)


TopBanRedBgShadow = TopBanRedBg.copy()
TopBanRedBgShadow.parent = TopBanRedBg
TopBanRedBgShadow.blur = 16
TopBanRedBgShadow.opacity = 0.4
TopBanRedBgShadow.y = 24*n


TopBanRed_Sum_title = new TextLayer
	parent: TopBanRedBg
	x: Align.center
	y: Align.top(48)
	text: "最高可借"
	fontSize: 24*n
	fontFamily: "PingFang SC"
	fontWeight: 300
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(255,255,255,0.72)"

TopBanRed_Sum = new TextLayer
	parent: TopBanRedBg
	x: Align.center
	y: Align.top(72*n)
	width: 308*n
# 	text: "150,000"
	fontSize: 92*n
	fontFamily: "DIN Alternate"
	fontWeight: 700
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(255,255,255,1)"
	html: "<div id='TC' style='height: 120px; width: 308px;font-size:120px;'>15000</div>"

if Screen.width > 1200
	TopBanRedBg.html = "<div style='background: linear-gradient(45deg, #EA3C35,#FF9743);height:491px;filter:hue-rotate(0deg);'></div>"	
	TopBanRed_Sum.html = "<div id='TC' style='font-size:180px;'>15000</div>"
	
if Screen.width < 750
	TopBanRedBg.html = "<div style='background: linear-gradient(45deg, #EA3C35,#FF9743);height:260px;filter:hue-rotate(0deg);'></div>"	
	TopBanRed_Sum.html = "<div id='TC' style='font-size:88px;'>15000</div>"	
# TopBanRed_Sum.text = 0
LimNumber = new countup("TC", 0, 15000,0,1)
# LimNumberBack = new countup("TC", 15000, 0,0,1)
LimNumber.start()

button = new Layer
	parent: TopBanRedBg
	x: Align.center
	y: Align.bottom(-56*n)
	backgroundColor: "transparent"
	width: 160*n
	height: 48*n
	

button_bg = new Layer
	parent: button
	x: Align.center
	y: 24
	width: 160*n
	height: 48*n
	backgroundColor: "rgba(255,255,255,1)"
	borderRadius: 62

buttontxt = new TextLayer
	parent: button
	x: Align.center
	y: Align.center(24)
	text: "立即开户"
	fontSize: 24*n
	fontFamily: "PingFang SC"
	fontWeight: 500
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(232,51,61,1)"

# #建立导航图标数组

#图标导航	

iconNavGroup = new Layer
	parent: homeScroll.content
	width: Screen.width
	height: 160*n
	y: TopBanRedBg.y+TopBanRedBg.height
	shadowY: 1
	shadowColor: "#e0e0e0"
	backgroundColor: "#FFF"
iconNavGroup.placeBehind(TopBanRedBg)
homeScroll.parent = MainPageArr[0]
	
	

for i in [0...navIconsData.length]
	iconsNavBar = new IconsNavBar
# 	iconsNavBar.height = 160*n
	iconsNavBar.parent = iconNavGroup
	#载入导航图标组件
	navIcons.push(iconsNavBar)
	iconsNavBar.width = Screen.width/navIconsData.length
	iconsNavBar.x = Screen.width/navIconsData.length*i
	iconsNavBar.navIconPic.x = Align.center
	iconsNavBar.navIconPic.image = navIconsData[i].src
	iconsNavBar.navIconName.text = navIconsData[i].name
	iconsNavBar.navIconName.x = Align.center


announce = new AnnounceBar
announce.annouceTitle.text = "关于麦子借款女神节活动通知"
announce.annouceButton.text = "更多"

announce.parent = homeScroll.content
announce.y = iconNavGroup.height+iconNavGroup.y+16*n
banner = new Layer
	parent: homeScroll.content
	name: "banner"
	width: Screen.width
	height: 240*n
	backgroundColor: "#FFF"
	padding:32
	y:announce.y+announce.height+4
	z: 4
	opacity:1

# bannerCont = new Layer
# 	parent: banner
# 	name: "bannerCont"
# 	width: Screen.width-64
# 	x: Align.center
# 	y: Align.center
# 	borderRadius: 12
# 	height: 196
# # 	html:"<div style='background: linear-gradient(45deg, #EA3C35,#FF9743);height:196px;border-radius:12px;filter:hue-rotate(0deg);'></div>"	
# 	z: 1
# 	opacity: 1
	
bannerBg = new Layer
	parent: banner
	name: "bannerBg"
	width: Screen.width-64
	x: Align.center
	y: Align.center
	borderRadius: 8
	height: 188*n
	z: 1
	opacity: 1
# 	html:"<div style='height:224px;border-radius:12px;background-color:#F5F5F5;'></div>"
	backgroundColor:"#F5F5F5"	
	image: "images/home_vip_banner.png"



myCarousel = new CarouselComponent
	parent: homeScroll.content
	y:banner.y+banner.height+16*n
	backgroundColor:"#FFF"
	title: "活动专区"
	titleFontSize: 28*n
	titleColor: "#212121"
	itemCount: 3
	itemMargin: 24
	itemWidth: 288*n
	itemHeight: 144*n
	itemBorderRadius: 8
	imagePrefix: "images/items"
	margins: [48*n, 32, 32, 32]
	titleMargin: 16*n

myCarousel.row.width = 750

# print myCarousel.row.content
myCarousel.row.content.on Events.DragStart, ->
	homeScroll.content.draggable.enabled = false

myCarousel.row.content.on Events.DragEnd, ->
	homeScroll.content.draggable.enabled = true

BottomTxt = new TextLayer
	parent: homeScroll.content
	text: "没有更多内容"
	textAlign: "center"
	width: Screen.width
	fontSize: 24*n
	y: Align.bottom(-40*n)
	color: "#BDBDBD"


# bannerBg.imageFill("present")



#商城页
# 滑动TAB
scrollTab = new ScrollComponent
	parent: MainPageArr[1]
	y: 88*n
	height: 88*n
	width: Screen.width-88
	backgroundColor: "#FFF"	
	z: 2
scrollTab.content.draggable.vertical = false
scrollTab.content.states =
	on:
		x: Align.center(-240)
		options:
			curve:quick
			time:0.5
	off:
		x: 0
		options:
			curve:quick
			time:0.5
			
scrollTabNameData = ["推荐","手机","电脑","配饰","家电","美妆","视频"]
# 图标导航
mall_navIconsData = [{src:"images/nav_icon05.svg",name:"新人专享";},{src:"images/nav_icon06.svg",name:"用券专区";},{src:"images/nav_icon07.svg",name:"免息专区";},{src:"images/nav_icon08.svg",name:"限时秒杀";}]

mall_dailybestData = [{src:"images/dailybestpic01.png",name:"Amazfit Cor手环",subtitle:"彩色IPS触摸屏，50米游泳防…",price:"¥199";},{src:"images/dailybestpic02.png",name:"MADV Mini 全景相机",subtitle:"360°全景拍摄，全景直播",price:"¥56";},{src:"images/dailybestpic03.png",name:"90分全天候机能背包",subtitle:"颜值担当，减震背板",price:"¥199";},{src:"images/dailybestpic04.png",name:"飞利浦智睿蜡烛灯泡",subtitle:"APP编组控制，亮度色温可调",price:"¥129";},{src:"images/dailybestpic05.png",name:'"13.3"笔记本 四核i5',subtitle:"四核增强版，带独立显卡的…",price:"¥5399";},{src:"images/dailybestpic06.png",name:"iHealth 体温计",subtitle:"一按就能测体温",price:"¥129";}]

scrollTabLayerArr = []

for i in [0...scrollTabNameData.length]	
	scrollTabLayer = new TextLayer
		parent: scrollTab.content
		width: 120*n
		height: 88*n
		textAlign: "center"
		lineHeight: 3
		color: "#616161"
		x: 120*i*n
		fontSize: 28*n
		fontWeight: 500
		backgroundColor: "#FFF"
		text: scrollTabNameData[i]
		
	scrollTabLayerArr.push(scrollTabLayer)
# 	scrollTabTabUnderlineArr.push(TabUnderline)		
# 	print scrollTabNameData[i].name
scrollTabLayerArr[0].scale = 1.2
scrollTabLayerArr[0].color = primaryColor
# scrollTabTabUnderlineArr[0].scaleX = 1
# scrollTabTabUnderlineArr[0].backgroundColor = primaryColor


mallScroll = new ScrollComponent
	size: Screen.size
	scrollHorizontal: false
	parent: MainPageArr[1]

mallScroll.contentInset = 
	bottom: 160

# Variables
gutter = 40

# Create PageComponent
pageScroller = new PageComponent
	parent: mallScroll.content
	point: Align.center
	width: Screen.width
	height: Screen.height*1.5
	scrollVertical: false
	clip: false
pageScroller.content.draggable.bounceOptions =
	friction: 100,
	tension:10,
	tolerance:1
	
pageScroller.contentInset =
    top: 286*n	
# Loop to create pages
for index in [0...scrollTabNameData.length]
	page = new Layer
		size: pageScroller.size
		x: (pageScroller.width + gutter) * index
		backgroundColor: "#B6D7E6"
		hueRotate: index * 20
		parent: pageScroller.content
# 
# 	page.onClick ->
# 		pageScroller.snapToPage(this)
pageScroller.content.children[0].backgroundColor = "#FFF"
	
pageScroller.content.on Events.DragStart, ->
	mallScroll.content.draggable.enabled = false

pageScroller.content.on Events.DragEnd, ->
	mallScroll.content.draggable.enabled = true	
	
mallScroll.content.on Events.DragStart, ->
	pageScroller.content.draggable.enabled = false

mallScroll.content.on Events.DragEnd, ->
	pageScroller.content.draggable.enabled = true	

TabunderLineLayer = new Layer
	parent: scrollTab.content
	height: 12*n
	width: 60*n
# 	originX: 0
	scaleX: 1
	x: 32*n
	y: 80*n
	backgroundColor: primaryColor



for i in [0...scrollTabNameData.length]
	scrollTabLayerArr[i].states = 
		on:
# 			brightness:100
			color:primaryColor
			fontWeight:900
			scale:1.2
		off:
# 			brightness:90
			color:"#616161"
			fontWeight:500
			scale:1

	scrollTabLayerArr[i].onTap ->
		for i in [0...scrollTabNameData.length]
			scrollTabLayerArr[i].animate "off",curve: iOSAppLaunch,time: 0.3 
# 			scrollTabLayerArr[i].brightness = 100
		
# 		@brightness = 96
		@animate "on",curve:quick,time:0.5
		TabunderLineLayer.animate
			midX:@midX
			options:
				curve:quick
				time:0.5
# 		print @index
		pageScroller.content.x = (-Screen.width-40)*(@index-1)

			
# for i in [0...scrollTabNameData.length]
# 	scrollTabLayerArr[i].on Events.TouchStart, (event, layer) ->
# 		@brightness = 96
# 	scrollTabLayerArr[i].on Events.TouchMove, (event, layer) ->
# 		@brightness = 100				
# 	scrollTabLayerArr[i].on Events.TouchEnd, (event, layer) ->
# 		@brightness = 100		

	
pageScroller.on Events.Move, ->
	scrolltoX(pageScroller.scrollX)
# 	print pageScroller.scrollX
scrolltoX = (x)	->
	TabunderLineLayer.x = Utils.modulate(x,[0,-Screen.width-40],[32*n,-88*n],false)
	
pageScroller.on "change:currentPage", ->
	current = pageScroller.horizontalPageIndex(pageScroller.currentPage)
	for i in [0...scrollTabNameData.length]
		scrollTabLayerArr[i].animate "off",curve: quick,time: 0.5
		scrollTabLayerArr[current].animate "on",curve:quick,time:0.5
	if scrollTabNameData.length-current<current then scrollTab.content.animate "on",curve:quick,time:0.5
	else scrollTab.content.animate "off",curve:quick,time:0.5
		
			

StatusBarMall = StatusBar.copy()
StatusBarMall.children[1].visible = false
StatusBarMall.topbar.visible = false
StatusBarMall.topbarLeftIcon01.visible = false	
StatusBarMall.parent = MainPageArr[1]

more = new Layer
	parent: StatusBarMall
	x: Align.right
	y: 88*n
	z: 1
	width: 88*n
	height: 88*n
	backgroundColor: "rgba(255,255,255,1)"
	shadowColor: "rgba(255,255,255,1)"
	shadowX: -32
	shadowY: 0
	shadowBlur: 20
	shadowSpread: 0
	image: "images/more.svg"


searchBg = new Layer
	parent: MainPageArr[1]
	width: Screen.width
	height: 112*n
	y: scrollTab.y+scrollTab.height
	backgroundColor: "#FFF"
	
searchBg.states =
	on:
		y:0
		opacity: 0
		options: 
			curve:iOSActionSheet
			delay: 0.2
	off:
		y: 174
		opacity: 1
		options: 
			curve:iOSActionSheet
			delay: 0.2		
			
search_input = new Layer
	parent: searchBg
	x: 32
	y: 32
	backgroundColor: "transparent"
	width: Screen.width-180
	height: 64

rectangle2 = new Layer
	parent: search_input
	x: 0
	y: 0
	width: Screen.width-192*n
	height: 64*n
	backgroundColor: "rgba(247,245,245,1)"

iPhone = new TextLayer
	parent: search_input
	x: 55*n
	y: 14*n
	text: "iPhoneX"
	fontSize: 28*n
	fontFamily: "PingFang SC"
	fontWeight: 400
	letterSpacing: 0.8
	textAlign: "center"
	color: "#BDBDBD"
	
icon_search = new Layer
	width: 32*n
	height: 32*n
	x: 12*n
	y: 16*n
	parent: search_input
	backgroundColor: null
	image: "images/icon_search.svg"	

cart = new Layer
	parent: searchBg
	width: 48*n
	height: 48*n
	y: 40
	x: Align.right(-98*n)
	backgroundColor: null
	image: "images/cart.svg"
	
detail = new Layer
	parent: searchBg
	width: 48*n
	height: 48*n
	y: 40
	x: Align.right(-32*n)
	backgroundColor: null
	image: "images/detail.svg"
	
mallTopBan = new Layer
	parent: pageScroller.content.children[0]
	width: Screen.width
	y: 0
	height: 268*n
	backgroundColor: "#F5F5F5"
mallTopBanPic = new Layer
	parent: mallTopBan
	width: Screen.width-64*n
	x: 32*n
	y: 12*n
	height: 228*n
	image: "images/mall_top_baner.png"
	
	
	
	

#图标导航	

mall_iconNavGroup = new Layer
	parent: pageScroller.content.children[0]
	width: Screen.width
	height: 160*n
	y: mallTopBan.height+mallTopBan.y
	shadowY: 1
	shadowColor: "#e0e0e0"
	backgroundColor: "#FFF"
	
	

for i in [0...mall_navIconsData.length]
	iconsNavBar = new IconsNavBar
	iconsNavBar.parent = mall_iconNavGroup
	#载入导航图标组件
	navIcons.push(iconsNavBar)
	iconsNavBar.width = Screen.width/mall_navIconsData.length
	iconsNavBar.x = Screen.width/mall_navIconsData.length*i
	iconsNavBar.navIconPic.x = Align.center
	iconsNavBar.navIconName.x = Align.center
	iconsNavBar.navIconPic.image = mall_navIconsData[i].src
	iconsNavBar.navIconName.text = mall_navIconsData[i].name
	
dailybest = new Layer
	parent: pageScroller.content.children[0]
	width: Screen.width
	backgroundColor: "#FFF"
	height: 112*n
	y: mall_iconNavGroup.y+mall_iconNavGroup.height
	
dailybestTitle = new TextLayer
	parent: dailybest
	width: Screen.width-120
	x: 32*n
	text: "每日精选"
	fontSize: 28*n
	lineHeight: 5
	color: "#212121"
	fontWeight: 900
dailybestMore = new TextLayer
	parent: dailybest
	width: 80*n
	x: Align.right
	text: "更多"
	color: defaultColor
	fontSize: 24*n
	lineHeight: 5.8

#制作一个2列的视图矩阵
dailybestGutter = 30
row = 0
col = 0	

dailybestArr = []
# print pageScroller.content.children[0]

for i in [0...mall_dailybestData.length]
	dailybestPro = new ProductList
	dailybestPro.parent = pageScroller.content.children[0]
	if i%2 == 0
		row=0
		col++
		
	dailybestPro.x = (328*n+dailybestGutter)*row+32*n
	dailybestPro.y = 400*n*(col-1)+dailybest.height+dailybest.y
	row++
	dailybestArr.push(dailybestPro)
	
# 	print mall_dailybestData[i].src
	dailybestArr[i].productPic.image = mall_dailybestData[i].src
# 	dailybestArr[i].productPic.image.states =
# 		on:
# 			scale: 2.5
# 			x:0
# 			y:0
# 		off:
# 			scale: 1
# 			x:(328*n+dailybestGutter)*row+32*n
# 			y:400*n*(col-1)+520	 
	dailybestArr[i].productName.text = mall_dailybestData[i].name
	dailybestArr[i].productSub.text = mall_dailybestData[i].subtitle
	dailybestArr[i].productPrice.text = mall_dailybestData[i].price		

#详情页
prodetailPage = new Layer
	parent: MainPageArr[1]
	x:Screen.width
	width:Screen.width
	height: Screen.height
	backgroundColor: "#F5F5F5"
	z: 1

# prodetailPage.animate
# 	on:
# 		x:0
# 		
# 	off:
# 		x:Screen.width	

detailPicArr = ["images/detailPage/detail1_pic.png","images/detailPage/detail2_pic.png","images/detailPage/detail3_pic.png","images/detailPage/detail4_pic.png","images/detailPage/detail5_pic.png",]

prodetailScroll = new ScrollComponent
	y: 172*n
	size: Screen.size
	scrollHorizontal: false
	parent: prodetailPage

prodetailScroll.contentInset =
	bottom: 160*n

	
prodetailPic = new Layer
	parent: prodetailScroll.content
	backgroundColor: "#FFF"
	width:Screen.width
	height: 560*n
	y: 0
	image: "images/dailybestpic01.png"
	z: 2
for i in [0...detailPicArr.length]
	detailPic = new Layer
		parent: prodetailScroll.content
		width: Screen.width
		height: 560*n
		image: detailPicArr[i]
		y: 560+560*i*n

prodetailBottom = new Layer
	parent: prodetailPage
	width: Screen.width
	height: 98*n
	backgroundColor: "#FFF"
	y: Align.bottom
	shadowY: -1
	shadowColor: "#e0e0e0"

prodetailCart = new Layer
	parent:prodetailBottom
	x: 0
	y: 0
	backgroundColor: "transparent"
	width: Screen.width/6
	height: 98*n


prodetailCartIcon = new Layer
	parent: prodetailCart
	x: Align.center
	y: 8*n
	width: 48*n
	height: 48*n
	image: "images/cart.svg"

prodetailCartTxt = new TextLayer
	parent: prodetailCart
	width: Screen.width/6
	x: Align.center
	y: 56*n
	text: "购物车"
	fontSize: 22*n
	fontFamily: "PingFang SC"
	fontWeight: 400
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(66,66,66,1)"

prodetailLike = prodetailCart.copy()
prodetailLike.parent = prodetailBottom
prodetailLike.x = Screen.width/6
prodetailLike.children[0].image = "images/detailPage/like_nor.svg"
prodetailLikeSel = prodetailLike.children[0].copy()
prodetailLikeSel.parent = prodetailLike
prodetailLikeSel.opacity = 0
prodetailLikeSel.scale = 1
prodetailLikeSel.image = "images/detailPage/like_sel.svg"
prodetailLike.children[1].text = "收藏"

prodetailColl = new TextLayer
	parent: prodetailBottom
	backgroundColor: "#FFF"
	width: Screen.width/3
	x:Screen.width/3
	textAlign: "center"
	height: 98*n
	fontSize: 28*n
	lineHeight: 3.4
	text:"加入购物车"
	borderWidth: 0.5
	
prodetailPurch = prodetailColl.copy()
prodetailPurch.parent = prodetailBottom
prodetailPurch.x = 	Screen.width*2/3
prodetailPurch.backgroundColor = "#EA4935"
prodetailPurch.color = "#FFF"
prodetailPurch.text = "立即购买"	
	

prodetailStatusBar = StatusBar.copy()
prodetailStatusBar.parent = prodetailPage
prodetailStatusBar.children[0].visible = false
prodetailStatusBar.children[1].children[0].text = "产品详情页"
prodetailStatusBar.children[1].children[2].visible = true
prodetailStatusBar.children[1].children[1].image = "images/icon_share.svg"

# likeAnimateA = new Animation prodetailLike.children[2],
# 	opacity:1
# 	scale: 1.2
# 	options:
# 		time:0.04
# 		
# likeAnimateB = new Animation prodetailLike.children[2],
# 	opacity:1
# 	scale: 1
# 	options:
# 		time:0.04
# 		delay:0.04
# 		
# likeAnimateA.on Events.AnimationEnd, likeAnimateB.start		
prodetailLike.children[0].states =
	on:
		opacity:0
		scale:1.2
		options:
			time:0.1
			
prodetailLike.children[1].states =
	on:
		text:"已收藏"
		color: "#EA4935"
		options:
			time:0.1			
			
prodetailLike.children[2].states =
	on:
		opacity:1
		scale:1.2
		options:
			curve:bigPop


for i in [0...mall_dailybestData.length]
	dailybestArr[i].onTap ->
# 		print @
		prodetailPic.image = mall_dailybestData[@index-4].src
		BottomBar.animate
			y: Align.bottom(98*n)
			opacity: 0
			options: 
				curve: iOSSlideView
				time: 0.3
		prodetailPage.animate
			x: 0
			options: 
				curve: iOSSlideView
				time: 0.5


prodetailLike.onTap ->

# 	likeAnimateA.start()
	prodetailLike.children[2].stateCycle(time:0.15)
	prodetailLike.children[1].stateCycle(time:0.15)
	prodetailLike.children[0].stateCycle(time:0.15) 			
# 		scrollTabLayerArr[current].animate "on",curve:quick,time:0.5

prodetailStatusBar.children[1].children[0].onTap ->
	BottomBar.animate
			y: Align.bottom(0)
			opacity: 1
			options: 
				curve: iOSSlideView
				time: 0.3
	prodetailPage.animate
			x: Screen.width
			options: 
				curve: iOSSlideView
				time: 0.5

mallScroll.on Events.Move, ->
	scrolltoY(mallScroll.scrollY)
scrolltoY = (y) ->
	searchBg.y = Utils.modulate(y,[0,240*n],[174*n,0],true)
					
# mallScroll.content.on Events.DragStart, ->
# 	searchBg.animate "on"
# mallScroll.content.on Events.DragMove, ->
# 	searchBg.animate "off"			
# mallScroll.content.on Events.DragEnd, ->
# 	searchBg.animate "off"	


# 管家
masterStatusBar = StatusBar.copy()
masterStatusBar.parent = MainPageArr[2]
masterStatusBar.children[0].visible = false
masterStatusBar.children[1].children[0].text = "信用卡管家"	
masterStatusBar.children[1].children[1].image = "images/nav_list.svg"

masterScroll = new ScrollComponent
	parent: MainPageArr[2]
	size: Screen.size
	scrollHorizontal: false

masterScroll.content.backgroundColor = "#F5F5F5"
masterScroll = new ScrollComponent
	parent: MainPageArr[2]
	size: Screen.size
	scrollHorizontal: false
	
MasterBanRedBg = new Layer
	parent: masterScroll.content
	y: masterStatusBar.height+88*n
	width: Screen.width
	height: 296*n
	html: "<div style='background: linear-gradient(-45deg, #33B5FF,#512FFF);height:296px;filter:hue-rotate(0deg);'></div>"
	backgroundColor: null
		

ban_title = new TextLayer
	parent: MasterBanRedBg
	x: Align.center
	y: 48*n
	text: "11月信用卡"
	fontSize: 28*n
	fontFamily: "PingFang SC"
	fontWeight: 300
	textAlign: "center"
	color: "rgba(255,255,255,1)"

sum_title = new TextLayer
	parent: MasterBanRedBg
	x: Align.center
	y: 224*n
	text: "剩余应还款(总金额)"
	fontSize: 24*n
	fontFamily: "PingFang SC"
	fontWeight: 300
	textAlign: "center"
	color: "rgba(255,255,255,1)"

masterSum = new TextLayer
	parent: MasterBanRedBg
	x: Align.center
	y: 80*n
	width: 308*n
# 	text: "2,000"
	fontSize: 120*n
	fontFamily: "DIN Alternate"
	fontWeight: 700
	textAlign: "center"
	color: "rgba(255,255,255,1)"
	html: "<div id='MN' style='height: 120px; width: 308px;text-align:center;'></div>"
	
if Screen.width > 1200
	MasterBanRedBg.html = "<div style='background: linear-gradient(-45deg, #33B5FF,#512FFF);height:491px;filter:hue-rotate(0deg);'></div>"
	masterSum.html = "<div id='MN' style='height: 120px; width: 488px;text-align:center;'></div>"
	
if Screen.width < 750
	MasterBanRedBg.html = "<div style='background: linear-gradient(-45deg, #33B5FF,#512FFF);height:240px;filter:hue-rotate(0deg);'></div>"
	masterSum.html = "<div id='MN' style='height: 120px; width: 288px;text-align:center;'></div>"

MasterBanRedBgShadow = MasterBanRedBg.copy()
MasterBanRedBgShadow.parent = MasterBanRedBg
MasterBanRedBgShadow.blur = 16
MasterBanRedBgShadow.opacity = 0.4
MasterBanRedBgShadow.y = 24*n
MasterBanRedBgShadow.placeBehind(ban_title)
masterNum = new countup("MN",0,2000,0,1)
masterYuan = new TextLayer
	parent: MasterBanRedBg
	x: masterSum.x-24*n
	y: 168*n
	width: 40*n
	text: "¥"
	fontSize: 32*n
	fontFamily: "PingFang SC"
	fontWeight: 300
	textAlign: "center"
	color: "rgba(255,255,255,1)"




	
cardPicArr= ["images/bank card01.png","images/bank card02.png"]
for i in [0...cardPicArr.length]
	card = new Layer
		parent: masterScroll.content
		width: Screen.width-64
		x: Align.center
		y: 288*i*n+MasterBanRedBg.y+116*n
		height: 256*n
		shadowY: 1
		shadowBlur: 24
		shadowColor: "#DBDBDB"
		image: cardPicArr[i]
		backgroundColor: "#F5F5F5"
		
MasterBanRedBg.placeBefore(card)

Button = new Button
Button.parent = masterScroll.content
Button.z = 9
Button.x = 32
Button.y = card.y+card.height+32*n
Button.width = Screen.width-64
Button.label.width = Screen.width-160
Button.borderWidth = 1
Button.borderColor = "#E0E0E0"
Button.label.text = "+添加银行卡"
Button.label.color = "#616161"
Button.backgroundColor = "#FFF"

for i in [1...masterScroll.content.children.length]
	masterScroll.content.children[i].opacity = 0
	masterScroll.content.children[i].y = 288*i*n+MasterBanRedBg.y
	masterScroll.content.children[i].states =
		on:
			opacity:1
			y:288*i*n+MasterBanRedBg.y+32*n
			options:
				delay:0.1*i
		off:
			opacity:0
			y:288*i*n+MasterBanRedBg.y+116*n
	
BottomBarNavArr[2].onTap ->
	for i in [1...masterScroll.content.children.length]
		masterScroll.content.children[i].animate "on",curve: iOSAppLaunch,time: 0.3 		
				


#借款
LoanStatusBar = StatusBar.copy()
LoanStatusBar.parent = MainPageArr[3]
LoanStatusBar.children[0].visible = false
LoanStatusBar.children[1].children[0].text = "借款超市"	
LoanStatusBar.children[1].children[1].image = "images/loan_filter.svg"

LoanScroll = new ScrollComponent
	parent: MainPageArr[3]
	width: Screen.width
	height: Screen.height*3
	scrollHorizontal: false
LoanScroll.content.height = 3000	
LoanScroll.content.backgroundColor = "#F5F5F5"
LoanScroll.contentInset=
	top: 196*n
	bottom: 160*n
LoanBanBg = new Layer
	parent: LoanScroll.content
	y: 0
	width: Screen.width
	height: 296*n
	html: "<div style='background: linear-gradient(-45deg, #6C5EFC,#AD4EF3);height:296px;filter:hue-rotate(0deg);'></div>"
	backgroundColor: null


if Screen.width>1200
	LoanBanBg.html = "<div style='background: linear-gradient(-45deg, #6C5EFC,#AD4EF3);height:491px;filter:hue-rotate(0deg);'></div>"
	
if Screen.width<750	
	LoanBanBg.html = "<div style='background: linear-gradient(-45deg, #6C5EFC,#AD4EF3);height:240px;filter:hue-rotate(0deg);'></div>"

LoanBanBgShadow = LoanBanBg.copy()
LoanBanBgShadow.parent = LoanBanBg
LoanBanBgShadow.blur = 16
LoanBanBgShadow.opacity = 0.4
LoanBanBgShadow.y = 24		


apply_num = new Layer
	parent: LoanBanBg
	x: Align.center
	y: 56
	backgroundColor: "transparent"
	width: 240
	height: 48

path9 = new Layer
	parent: apply_num
	x: Align.center
	y: 0
	width: 240*n
	height: 44*n
	opacity: 0.4
	backgroundColor: "#6804EE"

layer_3212716 = new TextLayer
	width: 240*n
	parent: apply_num
	x: Align.center
	y: 8*n
	text: "已有3212716人申请"
	fontSize: 22*n
	fontFamily: "PingFang SC"
	fontWeight: 300
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(255,255,255,1)"
	
loan_title = new TextLayer
	parent: LoanBanBg
	x: Align.center
	y: 212*n
	text: "借1万元日息最低1块3"
	fontSize: 24*n
	fontFamily: "PingFang SC"
	fontWeight: 300
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(255,255,255,1)"

loan_subtitle = new TextLayer
	parent: LoanBanBg
	x: Align.center
	y: 120*n
	width: 566*n
	text: "极速下款，最高5万"
	fontSize: 46*n
	fontFamily: "PingFang SC"
	fontWeight: 600
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(255,255,255,1)"


		
#产品卡片数据
loanCardData = [{src:"images/loanCardPic01.png",title:"闪电借";subtitle:"6分钟极速到账,有工作即可借";limit:"0~3000";month:"1～3";},{src:"images/loanCardPic02.png",title:"大额借";subtitle:"淘宝、公积金、保单任意一项";limit:"3100~50000";month:"12～36";},{src:"images/loanCardPic03.png",title:"精英贷";subtitle:"每月还息，向老用户开放";limit:"50000~200000";month:"12～36";}]
#产品卡片
for i in [0...loanCardData.length]
	loanCard= new LoanCard
	loanCard.parent = LoanScroll.content
	loanCard.y = LoanBanBg.height+LoanBanBg.y+64+(loanCard.height+32)*i
	loanCard.loanCardIcon.image = loanCardData[i].src
	loanCard.loanCardSubtitle.text = loanCardData[i].subtitle
	loanCard.loanCardTitle.text = loanCardData[i].title
	loanCard.loanCardLimit.text = loanCardData[i].limit
	loanCard.loanCardMon.text = loanCardData[i].month
for i in [1...LoanScroll.content.children.length]	
	LoanScroll.content.children[i].opacity = 0
	LoanScroll.content.children[i].y = (288+32)*i*n+32
	LoanScroll.content.children[i].states =
		on:
			opacity:1
			y:(288+32)*i*n+8
			options:
				delay:0.1*i
		off:
			opacity:0
			y:(288+32)*i*n+32
	
BottomBarNavArr[3].onTap ->
	for i in [1...LoanScroll.content.children.length]
		LoanScroll.content.children[i].animate "on",curve: iOSAppLaunch,time: 0.3 		
				


# 我的
# 图标导航
account_navIconsData = [{src:"images/nav_icon09.svg",name:"账单";},{src:"images/nav_icon10.svg",name:"提现账户";},{src:"images/nav_icon11.svg",name:"银行卡";},{src:"images/nav_icon12.svg",name:"积分商城";}]
account_listData = [{src:"images/account/list_icon01.svg",name:"常见问题";},{src:"images/account/list_icon02.svg",name:"客服专线";},{src:"images/account/list_icon03.svg",name:"投诉专线";},{src:"images/account/list_icon04.svg",name:"关于我们";},{src:"images/account/list_icon05.svg",name:"设置";}]


AccountStatusBar = new Layer
	parent: MainPageArr[4]
	width:Screen.width
	height: 88
	image: "images/Status Bar (White).png"
	z: 1
AccountStatusBar.placeBefore(accountBanBg)

accountBanBg = new Layer
	parent: MainPageArr[4]
	y: 0
	width: Screen.width
	height: 560*n
	html: "<div style='background: linear-gradient(-45deg, #FF6F43,#EA3C35);height:560px;filter:hue-rotate(0deg);'></div>"
	backgroundColor: null

if Screen.width>1200
	accountBanBg.html = "<div style='background: linear-gradient(-45deg, #FF6F43,#EA3C35);height:940px;filter:hue-rotate(0deg);'></div>"


#图标导航	

account_iconNavGroup = new Layer
	parent: MainPageArr[4]
	width: Screen.width
	height: 160*n
	y: accountBanBg.height
	shadowY: 1
	shadowColor: "#e0e0e0"
	backgroundColor: "#FFF"	

for i in [0...account_navIconsData.length]
	iconsNavBar = new IconsNavBar
	iconsNavBar.parent = account_iconNavGroup
	#载入导航图标组件
	navIcons.push(iconsNavBar)
	iconsNavBar.width = Screen.width/account_navIconsData.length
	iconsNavBar.x = Screen.width/account_navIconsData.length*i
	iconsNavBar.navIconPic.image = account_navIconsData[i].src
	iconsNavBar.navIconName.text = account_navIconsData[i].name
	

	
AccountScroll = new ScrollComponent
	parent: MainPageArr[4]
	width: Screen.width
	y: account_iconNavGroup.y+account_iconNavGroup.height
	height: 96*6+320
	scrollHorizontal: false
# AccountScroll.content.height = 1000	
AccountScroll.content.backgroundColor = "#F5F5F5"
# AccountScroll.contentInset=
# 	top: 720


AccountScroll.content.height = 460
# print AccountScroll.content		





accountBanBgShadow = accountBanBg.copy()
accountBanBgShadow.parent = accountBanBg
accountBanBgShadow.blur = 16
accountBanBgShadow.opacity = 0.4
accountBanBgShadow.y = 24		


Avatar = new Layer
	parent: accountBanBg
	x: Align.center
	y: 120*n
	width:144*n
	height: 144*n
	backgroundColor: "#FFF"
	borderRadius: 72*n
	borderWidth: 0
	borderColor: "#FFF"
	image: "images/avatar.png"
	
Avatarshadow = Avatar.copy()
Avatarshadow.parent = accountBanBg
Avatarshadow.placeBehind(Avatar)
Avatarshadow.y = Avatar.y+12*n
Avatarshadow.blur = 20
Avatarshadow.opacity = 0.5	

accountNum01 = new TextLayer
	parent: accountBanBg
	x: 80
	y: 434*n
	text: "2000.67"
	fontSize: 30*n
	fontFamily: "PingFang SC"
	fontWeight: 600
	letterSpacing: -0.6
	textAlign: "center"
	color: "rgba(255,255,255,1)"

accounthan02 = new TextLayer
	parent: accountBanBg
	x: Align.center
	y: 476*n
	text: "优惠礼包"
	fontSize: 26*n
	fontFamily: "PingFang SC"
	fontWeight: 400
	letterSpacing: -0.5
	textAlign: "center"
	color: "rgba(255,255,255,0.8)"

accountNum02 = new TextLayer
	parent: accountBanBg
	x: Align.center
	y: 434*n
	text: "2"
	fontSize: 30*n
	fontFamily: "PingFang SC"
	fontWeight: 600
	letterSpacing: 0.0
	textAlign: "center"
	color: "rgba(255,255,255,1)"

accounthan03 = new TextLayer
	parent: accountBanBg
	x: Align.right(-80*n)
	y: 476*n
	text: "积分"
	fontSize: 26*n
	fontFamily: "PingFang SC"
	fontWeight: 400
	letterSpacing: -0.5
	textAlign: "right"
	color: "rgba(255,255,255,0.8)"

accountNum03 = new TextLayer
	parent: accountBanBg
	x: Align.right(-80*n)
	y: 434*n
	text: "6000"
	fontSize: 30*n
	fontFamily: "PingFang SC"
	fontWeight: 600*n
	letterSpacing: -0.6
	textAlign: "right"
	color: "rgba(255,255,255,1)"

avatarName = new TextLayer
	parent: accountBanBg
	x: Align.center
	y: 304*n
	text: "136****1356"
	fontSize: 36*n
	fontFamily: "PingFang SC"
	fontWeight: 600
	letterSpacing: -0.7
	textAlign: "center"
	color: "rgba(255,255,255,1)"

accounthan01 = new TextLayer
	parent: accountBanBg
	x: 80
	y: 476*n
	text: "近期待还"
	fontSize: 26*n
	fontFamily: "PingFang SC"
	fontWeight: 400
	letterSpacing: -0.5
	textAlign: "center"
	color: "rgba(255,255,255,0.8)"


for i in [0...account_listData.length]
	listWithIcon = new ListWithIcon
	listWithIcon.parent = AccountScroll.content
	listWithIcon.y = 96*i*n+16*n
	listWithIcon.children[1].image = account_listData[i].src
	listWithIcon.children[0].text = account_listData[i].name




# 初始化导航样式	
BottomBarNavIconArr[0].opacity = 0	
BottomBarNavIconCurArr[0].opacity = 1
BottomBarNavIconCurArr[0].scale = 1
BottomBarNavNamesArr[0].color = primaryColor
LimNumber.start()
BottomBarNavArr[2].onTap ->
	masterNum.start()
for i in [0...BottomBarData.length]
	BottomBarNavArr[i].onTap ->
		for i in [0...BottomBarData.length]
			BottomBarNavIconArr[i].opacity = 1
			BottomBarNavIconArr[i].scale = 1
			BottomBarNavIconCurArr[i].opacity = 0
			BottomBarNavNamesArr[i].color = defaultColor		
# 			MainPageArr[i].opacity = 0
			MainPageArr[i].visible = false
# 		print @children[2]
		@children[2].color = primaryColor
		@children[1].opacity = 0
		@children[0].opacity = 1
		MainPageArr[@index-1].visible = true
	
window.onresize = Utils.debounce 0.1, -> location.reload()		

