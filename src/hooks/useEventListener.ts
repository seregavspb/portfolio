import { useRef, useEffect, RefObject } from 'react';

type Options = Pick<AddEventListenerOptions, 'capture' | 'passive' | 'once'>;

export interface CustomTouchEvent extends MouseEvent, TouchEvent { }

type mainUseEventListener = <T extends keyof (HTMLElementEventMap & DocumentEventMap & WindowEventMap & TouchEvent & MouseEvent) >(
    eventName: T,
    handler: (event: (HTMLElementEventMap & DocumentEventMap & WindowEventMap & TouchEvent & MouseEvent & any)[T]) => void,
    element?: RefObject<HTMLDivElement> | HTMLElement | Document | Window | null,
    options?: Options
) => void;

const useEventListener: mainUseEventListener = (
    eventName,
    handler,
    element = window,
    options = {}
) => {
    const savedHandler = useRef<any>(null);
    const { capture, passive, once } = options;

    useEffect(() => { savedHandler.current = handler; }, [handler]);

    useEffect(() => {

        const ref = (element as RefObject<HTMLDivElement>).current;
        const div = (element as HTMLElement | Document | Window);
        const divElement = ref || div;
        const isSupported = divElement && divElement.addEventListener;
        if (!isSupported) { return }

        const eventListener = (event: any) => savedHandler.current(event);
        const opts = { capture, passive, once };

        divElement?.addEventListener(eventName, eventListener, opts);
        return () => {
            divElement?.removeEventListener(eventName, eventListener, opts);
        };

    }, [eventName, element, capture, passive, once]);
};

export default useEventListener;