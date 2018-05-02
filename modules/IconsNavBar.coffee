class exports.IconsNavBar extends Layer
	constructor: (@options={}) ->
		_.defaults @options,
			backgroundColor:"#FFF"
			height: 160
		
		@navIconPic = new Layer
			width:64
			height:64
			backgroundColor:"null"
			image:"images/nav_icon01.svg"
			backgroundColor:"#F5F5F5"
		
		@navIconName = new TextLayer
			height:40
			fontSize:24
			color:"#2D2929"
			text:"iconname"
			textAlign:"center"
			
		super @options
		
		@navIconPic.parent = @
		@navIconPic.x = Align.center
		@navIconPic.y = 32
		@navIconName.parent = @
		@navIconName.y = 112
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