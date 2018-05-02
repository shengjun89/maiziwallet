class exports.StatusBar extends Layer
	constructor: (@options={}) ->
		_.defaults @options,
			backgroundColor: "#FFF"
			width: Screen.width
			height: 88
			opacity: 0.96
			image: "images/statusbarblack.png"
			z:4
			backgroundBlur = 40
		@topbar = new Layer
			width: Screen.width
			height: 88
			backgroundColor: "#FFF"
	
		@pageTitle = new TextLayer
			fontSize:34
			fontWeight:800
			color:"#2D2929"
			backgroundColor: null
			textAlign: "center"
			x:Align.center
			width:Screen.width

		@topbarRightIcon01 = new Layer
			width: 40
			height:40
			backgroundColor: null
			x: Align.right(-16)
			image: "images/nav_icon_mess@2x.svg"
			
		@topbarLeftIcon01 = new Layer
			width: 40
			height:40
			backgroundColor: null
			x: Align.left(16)
			image: "images/nav_icon_back@2x.svg"

		super @options
		
		@topbar.parent = @
		@topbar.y = 88
		@pageTitle.parent = @topbar
		@topbarRightIcon01.parent = @topbar
		@topbarRightIcon01.y = Align.center()
		@topbarLeftIcon01.parent = @topbar
		@topbarLeftIcon01.y = Align.center()
		@pageTitle.y = Align.center()
		@pageTitle.text = "PageName"
		
	
