import styles from './EndBlock.module.scss';

export const EndBlock = () => {
	return (
		<div className={styles.block}>
			<div className={styles.blockText}>
				Будем рады видеть Вас
				<br />
				на нашем празднике!
			</div>
			<div className={styles.blockName}>
				С уважением, семья
				<br />
				<span>Аджиниязовых</span>
			</div>
		</div>
	);
};
