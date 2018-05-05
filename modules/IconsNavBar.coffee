class exports.IconsNavBar extends Layer
	n = Screen.width/750
	constructor: (@options={}) ->
		_.defaults @options,
			backgroundColor:"#FFF"
			height: 160*n
		
		@navIconPic = new Layer
			width:64*n
			height:64*n
			backgroundColor:"null"
			image:"images/nav_icon01.svg"
			backgroundColor:"#F5F5F5"
		
		@navIconName = new TextLayer
			height:40*n
			fontSize:24*n
			color:"#2D2929"
			text:"iconname"
			textAlign:"center"
			
		super @options
		
		@navIconPic.parent = @
		@navIconPic.x = Align.center
		@navIconPic.y = 32*n
		@navIconName.parent = @
		@navIconName.y = 112*n
		@navIconName.width = @.width
		@.onTouchStart @TouchStart
		@.onTouchEnd @TouchEnd
		@.onTouchMove @TouchEnd

	TouchStart: =>
		@.brightness = 90
	TouchEnd: =>
		@.brightness = 100
	TouchMove: =>
		@.brightness = 100