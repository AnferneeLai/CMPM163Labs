uniform sampler2D texture1;
varying vec2 vUv;

void main() {
	// sample from the texture based on the uv coordinates
gl_FragColor = texture2D(texture1, vUv);
}
