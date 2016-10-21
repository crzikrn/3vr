var vrDiv = function(text, width, height,x,y,z){
  this.text = text;
  this.width = width;
  this.height = height;
  this.position = new THREE.Vector3(x,y,z);
  this.rotation = new THREE.Euler(0,0,0);
  this.id;
  this.font = "Bold 80px Georgia";

  this.textCanvas = document.createElement('canvas');
  this.textContext = this.textCanvas.getContext('2d');
  this.textContext.font = this.font;
  this.textContext.fillstyle = '#101010';
  this.textContext.fillText(this.text, 90, 90);

  this.textTexture = new THREE.Texture(this.textCanvas);
  this.textTexture.needsUpdate = true;
  this.textMaterial = new THREE.MeshBasicMaterial( {map: this.textTexture, side:THREE.DoubleSide } );
  this.textMaterial.transparent = true;
  this.textMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(this.textCanvas.width, this.textCanvas.height),
      this.textMaterial
    );
  this.textMesh.position.set(this.position.x,this.position.y,this.position.z+10);

  this.textPlaneMaterial = new THREE.MeshBasicMaterial( {color:0xFFFFF0, side:THREE.DoubleSide } );
  this.textPlaneMaterial.transparent = true;

  this.textPlaneMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(this.width, this.height),
      this.textPlaneMaterial
    );
  this.textPlaneMesh.position.set(this.position.x,this.position.y,this.position.z);

  // var object = {
  //         "textMesh": this.textMesh,
  //         "planeMesh":this.textPlaneMesh
  //       };
  //
  // return object;


  //add update function and scene add as another function
};

vrDiv.prototype.update = function(){
  //this = this;
}

vrDiv.prototype.rotate = function(x,y,z){
  //this.rotation.set(x,y,z);
  this.rotation = new THREE.Euler(x,y,z);
};

vrDiv.prototype.add = function(){
  scene.add(this.textPlaneMesh );
  scene.add(this.textMesh);
}
