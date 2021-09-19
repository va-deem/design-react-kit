import React, { FC, HTMLAttributes } from 'react';
import { CSSModule, Util } from 'reactstrap';
import classNames from 'classnames';
import { Icon } from '../Icon/Icon';
// @ts-expect-error
const { mapToCssModules } = Util;

export interface ModalHeaderProps extends HTMLAttributes<HTMLElement> {
  [key: string]: any;
  cssModule?: CSSModule;
  /** Componente che conterrà il nodo titolo. Valore di default: h5 */
  tag?: React.ElementType;
  /** Componente che contenitore per l'header. Valore di default: div. */
  wrapTag?: React.ElementType;
  /** Funzione da passare al tasto di chiusura nell'intestazione. Quando questa funzione non è presente il tasto di chiusura non viene mostrato. Valore di default: undefined */
  toggle?: React.MouseEventHandler<any>;
  /** Indica il nome dell'icona da utilizzare nel titolo. */
  icon?: string;
  /** Classi da aggiungere al nodo contenitore. */
  className?: string;
  /** Utilizzato per personalizzare il messaggio peer screen reader per il bottone di chiusura del modale. Valore di default: 'Close' */
  closeAriaLabel?: string;
}

export const ModalHeader: FC<ModalHeaderProps> = ({
  icon,
  className,
  children,
  Util,
  toggle,
  tag: Tag = 'h5',
  wrapTag: WrapTag = 'div',
  closeAriaLabel = 'Close',
  close,
  charCode = 215,
  cssModule,
  ...props
}) => {
  const classes = mapToCssModules(
    classNames(className, 'modal-header'),
    cssModule
  );

  let CloseButton;

  if (!close && toggle) {
    var closeIcon =
      typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
    CloseButton = (
      <button
        type='button'
        onClick={toggle}
        className={mapToCssModules('close', cssModule)}
        aria-label={closeAriaLabel}
      >
        <span aria-hidden>{closeIcon}</span>
      </button>
    );
  }

  return (
    <WrapTag {...props} className={classes}>
      {icon != null ? <Icon icon={icon} /> : null}
      <Tag className={mapToCssModules('modal-title', cssModule)}>
        {children}
      </Tag>
      {close || CloseButton}
    </WrapTag>
  );
};
