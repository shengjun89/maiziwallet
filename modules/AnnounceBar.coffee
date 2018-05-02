class exports.AnnounceBar extends Layer
	constructor: (@options={}) ->
		_.defaults @options,
			backgroundColor:"#FFF"
			width: Screen.width
			height: 80
		
		@annouceTitle = new TextLayer
			x: 56
			height:80
			padding:24
			backgroundColor:"null"
			text: "Wheat wallet goddess festival activity..."
			fontSize:24
			color:"#2D2929"
			fontWeight:400
			textAlign:"center"
		
		@annouceButton = new TextLayer
			width:80
			height:80
			x:Align.right(-16)
			fontSize:24
			lineHeight:3.2
			color:"#9e9e9e"
			text:"more"
			textAlign:"center"
			backgroundColor:"#FFF"
		
		@annouceIcon = new Layer
			width:40
			height:40
			x:Align.left(24)
			image:"images/annoucebaricon.svg"
			
		super @options
		
		@annouceTitle.parent = @
		@annouceTitle.y = Align.center
		@annouceButton.parent = @
		@annouceButton.y = Align.center
		@annouceIcon.parent = @
		@annouceIcon.y = Align.center
		@annouceButton.onTouchStart @TouchStart
		@annouceButton.onTouchEnd @TouchEnd
		@annouceButton.onTouchMove @TouchEnd

	TouchStart: =>
		@annouceButton.brightness = 96
	TouchEnd: =>
		@annouceButton.brightness = 100
	TouchMove: =>
		@annouceButton.brightness = 100