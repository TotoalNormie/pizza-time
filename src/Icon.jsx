export const Icon = ({ type, size, top, left, rotate, mobile = false }) => {
	const imgRotation = rotate ? rotate : 0;
	const imgSize = size ? size : 'auto';
	const imgTop = top ? top : '0';
	const imgLeft = left ? left : '0';

	return (
		<img
			src={type}
			className={`icon ${mobile ? 'mobile' : ''}`}
			style={{
				rotate: imgRotation,
				width: imgSize,
				height: imgSize,
				top: imgTop,
				left: imgLeft,
			}}
		/>
	);
};
