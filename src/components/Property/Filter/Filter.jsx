import React, { useMemo, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import cns from 'classnames';

import { UiStoreContext } from '@store';
import { Button, SvgIcon, RangeSlider } from '@ui';
import st from './Filter.module.scss';

const tags = [
  { id: 1, label: 'Pool', icon: 'filter-pool' },
  { id: 2, label: 'Gym', icon: 'filter-gym' },
  { id: 3, label: 'Deck', icon: 'filter-deck' },
  { id: 4, label: 'Bar', icon: 'filter-bar' },
  { id: 5, label: 'Beach', icon: 'filter-beach' },
  { id: 6, label: 'Conceirge', icon: 'filter-conceirge' },
  { id: 7, label: 'Play area', icon: 'filter-playarea' },
  { id: 8, label: 'Pool', icon: 'filter-pool' },
  { id: 9, label: 'Pool', icon: 'filter-pool' },

  { id: 10, label: 'EV', icon: 'filter-ev' },
  { id: 11, label: 'Pool', icon: 'filter-wheel' },
  { id: 12, label: 'Security', icon: 'filter-security' },
];

const Filter = observer(({ className }) => {
  const [opened, setOpened] = useState(false);

  const [aroi, setAroi] = useState([7.8, 10.2]);
  const [price, setPrice] = useState([1.8, 2.3]);
  const [bedrooms, setBedrooms] = useState(null);
  const [bathrooms, setBathrooms] = useState(null);

  const uiContext = useContext(UiStoreContext);

  useEffect(() => {
    uiContext.setScreenBlocked(opened);
  }, [opened]);

  useEffect(() => {
    if (opened !== setOpened) {
      setOpened(uiContext.screenBlocked);
    }
  }, [uiContext.screenBlocked]);

  return (
    <div className={cns(st.filter, className)}>
      <div className={st.toggle}>
        <Button iconLeft="filter" theme="accent" onClick={() => setOpened(!opened)}>
          <span className="md-hidden">Filter Options</span>
        </Button>
      </div>

      <div className={cns(st.dropdown, opened && st._opened)}>
        <div className={st.grid}>
          <div className={st.groups}>
            <div className={st.section}>
              <div className={st.sectionLabel}>
                <div className={st.sectionIcon}>
                  <SvgIcon name="filter-aroi" />
                </div>
                AROI
              </div>
              <div className={st.sectionContent}>
                <RangeSlider
                  value={aroi}
                  min={6}
                  max={12}
                  step={0.1}
                  onChange={(v) => setAroi(v)}
                  tipFormatter={(v) => `${v}%`}
                />
              </div>
            </div>

            <div className={st.section}>
              <div className={st.sectionLabel}>
                <div className={st.sectionIcon}>
                  <SvgIcon name="bank" />
                </div>
                Price
              </div>
              <div className={st.sectionContent}>
                <RangeSlider
                  value={price}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(v) => setPrice(v)}
                  tipFormatter={(v) => `$${v}m`}
                />
              </div>
            </div>

            <div className={st.section}>
              <div className={st.sectionLabel}>
                <div className={st.sectionIcon}>
                  <SvgIcon name="bedrooms" />
                </div>
                Bedrooms
              </div>
              <div className={st.sectionContent}>
                <div className={st.sectionBtnRadio}>
                  <Button variant="small" theme={bedrooms === 0 ? 'accent' : 'white'} onClick={() => setBedrooms(0)}>
                    Studio
                  </Button>
                  <Button variant="small" theme={bedrooms === 1 ? 'accent' : 'white'} onClick={() => setBedrooms(1)}>
                    1 Bed
                  </Button>
                  <Button variant="small" theme={bedrooms === 2 ? 'accent' : 'white'} onClick={() => setBedrooms(2)}>
                    2 Bed
                  </Button>
                  <Button variant="small" theme={bedrooms === 3 ? 'accent' : 'white'} onClick={() => setBedrooms(3)}>
                    3 Bed
                  </Button>
                  <Button variant="small" theme={bedrooms === 4 ? 'accent' : 'white'} onClick={() => setBedrooms(4)}>
                    4 Bed+
                  </Button>
                </div>
              </div>
            </div>

            <div className={st.section}>
              <div className={st.sectionLabel}>
                <div className={st.sectionIcon}>
                  <SvgIcon name="bathrooms" />
                </div>
                Bathrooms
              </div>
              <div className={st.sectionContent}>
                <div className={st.sectionBtnRadio}>
                  <Button variant="small" theme={bathrooms === 1 ? 'accent' : 'white'} onClick={() => setBathrooms(1)}>
                    1 Bath
                  </Button>
                  <Button variant="small" theme={bathrooms === 2 ? 'accent' : 'white'} onClick={() => setBathrooms(2)}>
                    2 Bath
                  </Button>
                  <Button variant="small" theme={bathrooms === 3 ? 'accent' : 'white'} onClick={() => setBathrooms(3)}>
                    3 Bath
                  </Button>
                  <Button variant="small" theme={bathrooms === 4 ? 'accent' : 'white'} onClick={() => setBathrooms(4)}>
                    4 Bath
                  </Button>
                  <Button variant="small" theme={bathrooms === 5 ? 'accent' : 'white'} onClick={() => setBathrooms(5)}>
                    5 Bath+
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className={st.tags}>
            {tags &&
              tags.map((tag) => (
                <div className={st.tag} key={tag.id}>
                  <div className={st.tagIcon}>
                    {' '}
                    <SvgIcon name={tag.icon} />
                  </div>

                  <span>{tag.label}</span>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Filter;
