import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-black">
      <div className="screen-min-width">
        <div>
          <p className="font-semibold text-gray text-xs">
            More ways to connect: {' '}
            <a className="underline text-blue" href='mailto:ChatWithMidas@gmail.com' target="_blank">
            Email Us {' '}
            </a>
            or {' '}
            <a href='https://maps.app.goo.gl/D4pnvDhZ7DrWxWg38' target="_blank" className="underline text-blue">
            Visit Our Center
            </a>{' '}
            at USJ 21.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 014 330 5197
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">Copright @ 2024 Bullish Business Hub Sdn Bhd | All rights reserved.</p>
          <div className="flex">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-gray text-xs">
                {link}{' '}
                {i !== footerLinks.length - 1 && (
                  <span className="mx-2"> | </span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer