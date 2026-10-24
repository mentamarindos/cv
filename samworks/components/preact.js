/* Single wiring point for Preact + htm via CDN (no build step).
   Swap the CDN or versions here and every component follows.
   All components must import from this module, never from the CDN
   directly — two different URLs would yield two Preact instances. */
import { h, render, Fragment } from 'https://esm.sh/preact@10';
import { useState, useEffect, useRef } from 'https://esm.sh/preact@10/hooks';
import htm from 'https://esm.sh/htm@3';

export { h, render, Fragment, useState, useEffect, useRef };
export const html = htm.bind(h);
