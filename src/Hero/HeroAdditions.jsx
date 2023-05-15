import { animated, useSpring, config } from '@react-spring/web';

export default function HeroAdditions() {
    const border1Styles = useSpring({
        from: {
            transform: 'rotateY(180deg) translateX(100%)'
        },
        to: {
            transform: 'rotateY(0) translateX(0)'
        },
        animate: '4s ease'
    });

    // const [border1Config, api] = useSpring(() => {
    //     y: 0,
    //     config: {
    //         mass: 100,
    //     }
    // })


    return (<>
        <div className="dot dot-1"></div>
        <div className="dot dot-2"></div>
        <animated.div className="border border__1" style={border1Styles}></animated.div>
        <div className="border border__2"></div>
        </>)
}