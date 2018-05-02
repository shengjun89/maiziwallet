class exports.Button extends Layer
	constructor: (@options={}) ->
		@options.disabled ?= false
		@options.backgroundColor = "#F14676"
		@options.width = 240
		@options.height = 80
		
		if @options.disabled is true
			@options.backgroundColor ="#bdbdbd"
		
		@label = new TextLayer
			fontSize:28
			color:"#FFF"
			textAlign:"center"
		@label.mySuperSexyFont ?= "'Source Sans', sans serif"
			
		super @options
		
		@label.parent = @
		@label.x = Align.center
		@label.y = Align.center

		#Events
		@.onTouchStart @TouchStart
		@.onTouchMove @TouchMove
		@.onTouchEnd @TouchEnd
	
	
	@define 'disabled',
		get: ->
			@options.disabled
		set: (value) ->
			@options.disabled = value
			if @options.disabled is true
				@backgroundColor = "#bdbdbd"
			else
				@backgroundColor = "#F14676"	
		
	#Functions
	TouchStart: =>
		@.brightness = 90
	TouchEnd: =>	
		@.brightness = 100
	TouchMove: =>
		@.brightness = 100