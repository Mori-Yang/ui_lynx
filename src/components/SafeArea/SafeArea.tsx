import type { ViewProps } from '@lynx-js/types';
import type { PropsWithChildren } from 'react';
import './SafeArea.css';

/**
 * Native injection required: GlobalProps -> safeAreaInsets
 */
declare module "@lynx-js/types" {
    interface GlobalProps {
        safeAreaInsets?: {
            top: number;
            bottom: number;
        };
    }
}

type SafeAreaProps = {
    className?: string;
} & ViewProps

export const SafeArea = ({
    children,
    className,
    ...props
}: PropsWithChildren<SafeAreaProps>) => {
    const cn = (className || "" + " safe-area").trim()

    if (lynx.__globalProps.safeAreaInsets) {
        const { top, bottom } = lynx.__globalProps.safeAreaInsets;
        return <view
            className={cn}
            style={{ paddingTop: top, paddingBottom: bottom }}
            {...props}
        >
            {children}
        </view>
    }

    return <view className={cn} {...props}>
        {children}
    </view>
}