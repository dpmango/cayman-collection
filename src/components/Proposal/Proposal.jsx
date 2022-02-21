import React, { useState, useCallback, useMemo, useContext } from 'react';
import { Link } from 'react-router-dom';
import cns from 'classnames';

import { UiStoreContext } from '@store';
import { SvgIcon, Button } from '@ui';
import { numberWithCommas } from '@helpers';

import { ProposalCard } from '@c/Proposal';
import st from './Proposal.module.scss';

const Proposal = ({ className, title, description, list }) => {
  const [cartItems, setCartItems] = useState(list);
  const uiContext = useContext(UiStoreContext);
  const handleRemoveClick = useCallback(
    (id) => {
      setCartItems(cartItems.filter((x) => x.id !== id));
    },
    [cartItems]
  );

  const handleCounterChange = useCallback(
    (id, value) => {
      const cartItemsNew = [
        ...cartItems.map((x) =>
          x.id === id
            ? {
                ...x,
                counter: value,
              }
            : { ...x }
        ),
      ];
      setCartItems(cartItemsNew);
    },
    [cartItems]
  );

  const totalPrice = useMemo(() => {
    return cartItems.reduce((acc, x) => (acc += x.price * (x.counter || 1)), 0);
  }, [cartItems]);

  return (
    <section className={cns(st.container, className)}>
      <div className="container">
        <div className="container-inner">
          <div className={st.head}>
            <h1 className={cns('h0-title', st.title)}>{title}</h1>
            <div className={cns('p-caption', st.description)}>{description}</div>
          </div>

          <div className={st.table}>
            <div className={st.tableHead}>
              <span>Products</span>
              <span>Total</span>
            </div>
            <div className={st.tableBody}>
              {cartItems &&
                cartItems.map((x) => (
                  <ProposalCard
                    {...x}
                    onRemoveClick={handleRemoveClick}
                    onCounterChange={handleCounterChange}
                    key={x.id}
                  />
                ))}
            </div>
            <div className={st.tableTotal}>
              <div className={st.tableTotalLabel}>Total</div>
              <div className={st.tableTotalPrice}>${numberWithCommas(totalPrice)}</div>
            </div>
          </div>

          <div className={st.actions}>
            <Link to="/" className={st.back}>
              <SvgIcon name="arrow-left-fat" />
              <span>Ammend Selection</span>
            </Link>
            <div className={st.cta}>
              <Button theme="gray" variant="small" block onClick={() => uiContext.setModal('restricted')}>
                Proceed to Contract
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposal;
