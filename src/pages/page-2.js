import React, { useRef, useEffect } from 'react'
import { Link } from 'gatsby'
import { motion, useAnimation } from 'framer-motion'

import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import { ReactComponent as Rocket } from '../images/rocket.svg'

const Body = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #ff2525 74%);
  display: flex;
  align-items: center;
  justify-content: center;
}
`

const WhiteBox = styled(motion.div)`
  align-self: flex-end;
`

const SecondPage = () => {
  const controls = useAnimation()
  const bodyRef = useRef(null)

  const onClick = () => {
    controls.start({
      translateY: -bodyRef.current.offsetHeight,
    })
  }

  return (
    <Body ref={bodyRef}>
      <WhiteBox
        animate={controls}
        transition={{
          yoyo: Infinity,
          duration: 6,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="64"
          viewBox="0 0 128 128"
          width="64"
          onClick={onClick}
        >
          <g>
            <g>
              <path
                d="m76.943 90.293h-25.886l-6.711-44.909a37.429 37.429 0 0 1 7.87-29.01l11.784-14.627 11.784 14.627a37.429 37.429 0 0 1 7.87 29.01z"
                fill="#fff"
              />
              <path
                d="m19.5 75.467 26.634-18.12 4.923 32.946h-31.557z"
                fill="#fff"
              />
              <path
                d="m47.344 65.448-19.7 13.4a1.748 1.748 0 0 0 -.766 1.446v10h3.5v-9.07l17.54-11.933z"
                fill="#fff"
              />
              <path
                d="m108.5 75.467-26.634-18.12-4.923 32.946h31.557z"
                fill="#fff"
              />
              <path
                d="m100.356 78.851-19.7-13.4-.574 3.842 17.54 11.933v9.07h3.5v-10a1.748 1.748 0 0 0 -.766-1.445z"
                fill="#fff"
              />
              <path d="m51.057 90.293h25.887v9.499h-25.887z" fill="#fff" />
              <path
                d="m64 126.247a36.224 36.224 0 0 1 -8.188-22.938v-3.517h16.375v3.517a36.223 36.223 0 0 1 -8.187 22.938z"
                fill="#fff"
              />
              <path
                d="m62.25 99.792v9.208a1.75 1.75 0 0 0 3.5 0v-9.208z"
                fill="#fff"
              />
              <ellipse cx="64" cy="35.375" fill="#fff" rx="8.188" ry="11.625" />
            </g>
            <g>
              <path d="m93.782 67.571 3.309 2.251a1.75 1.75 0 0 0 1.969-2.894l-3.309-2.251a1.75 1.75 0 0 0 -1.969 2.894z" />
              <path d="m109.484 74.02-3.575-2.432a1.75 1.75 0 1 0 -1.969 2.893l2.81 1.912v12.15h-5.628v-8.243a1.748 1.748 0 0 0 -.766-1.446l-18.094-12.313.923-6.18 3.749 2.55a1.749 1.749 0 1 0 1.966-2.893l-5.142-3.5 1.625-10.876a39.281 39.281 0 0 0 -8.239-30.367l-11.781-14.626a1.811 1.811 0 0 0 -2.726 0l-11.784 14.627a39.143 39.143 0 0 0 -8.386 19.89 1.75 1.75 0 0 0 3.474.418 35.649 35.649 0 0 1 7.638-18.112l10.421-12.935 10.421 12.935a35.769 35.769 0 0 1 7.5 27.653l-6.486 43.418h-22.87l-4.7-31.455-1.788-11.963a1.75 1.75 0 0 0 -3.462.518l1.625 10.876-25.724 17.501a1.751 1.751 0 0 0 -.766 1.447v14.826a1.75 1.75 0 0 0 1.75 1.75h29.807v7.749a1.749 1.749 0 0 0 1.75 1.75h3v1.767a38.08 38.08 0 0 0 8.583 24.046 1.75 1.75 0 0 0 2.709 0 38.074 38.074 0 0 0 8.583-24.046v-1.767h3.006a1.749 1.749 0 0 0 1.75-1.75v-7.749h29.812a1.75 1.75 0 0 0 1.75-1.75v-14.826a1.751 1.751 0 0 0 -.766-1.447zm-11.862 7.2v7.32h-18.648l2.714-18.16zm-48.6 7.32h-18.644v-7.32l15.934-10.84zm-27.772-12.147 23.565-16.031.923 6.179-18.094 12.31a1.748 1.748 0 0 0 -.766 1.446v8.246h-5.628zm49.187 26.916a34.582 34.582 0 0 1 -6.437 20.06 34.576 34.576 0 0 1 -6.438-20.06v-1.767h4.688v7.458a1.75 1.75 0 0 0 3.5 0v-7.458h4.687zm4.756-5.267h-22.386v-6h22.386z" />
              <path d="m73.937 35.375c0-7.375-4.458-13.375-9.937-13.375s-9.938 6-9.938 13.375 4.458 13.375 9.938 13.375 9.937-6 9.937-13.375zm-16.375 0c0-5.353 2.949-9.875 6.438-9.875s6.437 4.522 6.437 9.875-2.948 9.875-6.437 9.875-6.438-4.522-6.438-9.875z" />
            </g>
          </g>
        </svg>
      </WhiteBox>
    </Body>
  )
}

export default SecondPage
