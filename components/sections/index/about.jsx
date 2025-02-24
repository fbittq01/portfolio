// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					preTitle="Synopsis"
					subTitle="With a strong foundation in full stack development, I excel in creating seamless, user-focused digital experiences by integrating functional systems with intuitive interfaces."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/my-profile.jpg" alt="My profile photo"/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my expertise in full stack development and UX design, I bring strong time management and multitasking skills to the table. I enjoy staying active through activities like badminton, gym workouts, and camping. I am confident in my ability to bring passion and value to any project I work on."
						/>
						<BadgesBlock 
							title="Reasearch and planning" 
							containerClass={about.container}
							list={methods} 
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="I really enjoy planning the structure of a project. From helping to create Design Systems to supporting Brand Strategy—I'm excited about working with the different aspects of user experience and learning how they all come together."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}

const methods 	= [
	{ key: 'planet-moon', 		name: 'User Research', 		type: 'fad' },
	{ key: 'window', 			name: 'Design Systems', 	type: 'fad' },
	{ key: 'solar-system', 		name: 'Operations', 		type: 'fad' },
]