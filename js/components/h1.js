export default class h1 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { liked: false };
	}

    console.log(props);
	render() {
		if (this.state.liked) {
			return 'You liked this.';
		}

		return e(
			'button',
			{ onClick: () => this.setState({ liked: true }) },
			'Like'
		);
	}
}
