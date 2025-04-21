import type { NodesRef, ViewProps } from '@lynx-js/types'
import style from './Circle.module.css'
import type React from 'react'
import { useRef } from '@lynx-js/react'
import { useEffect, useState } from 'react'

type CircleProps = {
    radius?: number
    color?: string
} & ViewProps

export const Circle: React.FC<CircleProps> = ({
    radius = 180,
    color = "black",
    ...props
}) => {
    const outerCircleRef = useRef<NodesRef>(null);
    const innerCircleRef = useRef<NodesRef[]>([]);

    function startRotate() {
        const rotationSpeed = 0.01;
        let angle = 0.2;

        function animate() {
            innerCircleRef.current.forEach((ref, index) => {
                if (ref) {
                    const delayedAngle = angle + index * (2 * Math.PI / 3);
                    const x = (radius - 10) * Math.cos(delayedAngle);
                    const y = (radius - 10) * Math.sin(delayedAngle);
                    ref.setNativeProps({
                        "transform": `translateX(calc(-50% + ${x}px)) translateY(calc(-50% + ${y}px))`
                    }).exec();
                }
            });
            angle += rotationSpeed;
        }
        return setInterval(animate, 1000 / 60);
    }

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;
        if (outerCircleRef.current && innerCircleRef.current.length > 0) {
            intervalId = startRotate()
        }
        return () => {
            if (intervalId) {
                clearInterval(intervalId)
            }
        }
    }, [outerCircleRef, innerCircleRef])


    return (
        <view
            ref={outerCircleRef}
            style={{
                height: "100%",
                width: "100%",
            }}
            {...props}
        >
            <text className={style.title}>Mori</text>
            <view
                className={style.inner_circle}
                style={{
                    height: radius * 2 + "px",
                    width: radius * 2 + "px",
                    backgroundColor: color,
                }}
            >
            </view>
            <view
                className={`${style.circle} ${style.inner_circle}`}
                style={{
                    height: radius * 0.3 + "px",
                    width: radius * 0.3 + "px",
                    backgroundColor: color,
                }}
                ref={(ref) => {
                    if (ref) {
                        innerCircleRef.current.push(ref)
                    }
                }}
            >
            </view>
            <view
                className={`${style.circle} ${style.inner_circle}`}
                style={{
                    height: radius * 0.3 + "px",
                    width: radius * 0.3 + "px",
                    backgroundColor: color,
                }}
                ref={(ref) => {
                    if (ref) {
                        innerCircleRef.current.push(ref)
                    }
                }}
            >
            </view>
            <view
                className={`${style.circle} ${style.inner_circle}`}
                style={{
                    height: radius * 0.3 + "px",
                    width: radius * 0.3 + "px",
                    backgroundColor: color,
                }}
                ref={(ref) => {
                    if (ref) {
                        innerCircleRef.current.push(ref)
                    }
                }}
            >
            </view>
        </view>
    )
}