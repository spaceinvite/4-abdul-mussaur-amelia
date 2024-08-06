import styles from './LocationBlock.module.scss';

export const LocationBlock = () => {
	return (
		<div className={styles.block}>
			<h3
				className={styles.blockTitle}
				data-aos='zoom-in'
				data-aos-duration='1000'
				data-aos-once='true'
			>
				Место
				<br />
				проведения
			</h3>
			<div className={styles.blockWrapper}>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					Наш праздник пройдёт
					<br />
					по адресу:
				</p>
				<p
					className={styles.blockWrapper__text}
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					с. Терекли-Мектеб
					<br />
					б/з «Алмаз»
				</p>
				<p
					className={styles.blockWrapper__time}
					data-aos='zoom-in'
					data-aos-duration='1000'
					data-aos-once='true'
				>
					19:00
				</p>
			</div>
		</div>
	);
};
