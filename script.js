
window.addEventListener( "load", () => 
{ 
  const canvas1 = document.getElementById( "canvas1" )

  const ctx = canvas1.getContext( "2d" ) // 2d or webgl
  canvas1.width = 600
  canvas1.height = 600

  
  class Fractal 
  {
    constructor( canvasWidth, canvasHeight )
    {
      this.canvasWidth = canvasWidth
      this.canvasHeight = canvasHeight
      this.size = 300
    }

    draw( context )
    {
      // center
      context.translate( this.canvasWidth / 2, this.canvasHeight / 2 )
      context.rotate( 0 )
      context.scale( 0.5, 0.5 )

      // rectangle
      context.fillRect( 0, 0, this.canvasWidth, this.canvasHeight )
      
      // line
      context.beginPath()
      context.moveTo( 0, 0 )
      context.lineTo( 500, 500 )
      context.stroke()
    }
  }

  class Particle 
  {
    
  }

  class Rain 
  {

  }

  let fractal = new Fractal( canvas1.width, canvas1.height )
  fractal.draw( ctx )

} )