import React, { useState, memo, useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useToasts } from 'react-toast-notifications';
import cns from 'classnames';

import { SvgIcon, Button } from '@ui';
import { formatBytes } from '@helpers';

import st from './File.module.scss';

const File = ({ className, data, onDelete, onSuccess, onError, ...props }) => {
  const { addToast } = useToasts();

  const [progress, setProgress] = useState(null);
  const [loadDone, setLoadDone] = useState(false);

  // start upload automatically when file is added
  const handleUpload = useCallback(async () => {
    if (data && data.upload !== null) {
      setProgress(100);
      setLoadDone(true);
      return;
    }

    // await callbackContext
    //   .uploadFiles([data.file], (progress) => {
    //     setProgress(progress);
    //   })
    //   .then((res) => {
    //     onSuccess && onSuccess({ file: data.file, id: data.id, upload: res[0] }); // fileId + name
    //     setLoadDone(true);
    //   })
    //   .catch((err) => {
    //     addToast(`Ошибка при загрузке файла ${data.file.name}`, { appearance: 'error' });
    //     onError && onError({ file: data.file, id: data.id, upload: null, error: err });
    //     return;
    //   });
  }, [data, onSuccess, onError]);

  const handleDeleteClick = useCallback(async () => {
    await callbackContext.deleteFile(data.upload.fileId || data.id);

    onDelete(data);
  }, [onDelete, data]);

  useEffect(async () => {
    if (!data.error) {
      await handleUpload();
    }
  }, []);

  return (
    <div className={cns(st.file, className)} data-id={data.id}>
      <div className={st.delete} onClick={handleDeleteClick}>
        <SvgIcon name="close" />
      </div>
      <div className={st.content}>
        {data.file.name}
        <span>{formatBytes(data.file.size)}</span>
      </div>

      <div className={cns(st.progress, (loadDone || data.error) && st._uploaded)}>
        <div className={st.progressInner} style={{ width: `${progress * 0.9}%` }}></div>
      </div>

      {data.error && (
        <div className={st.repeat}>
          <Button variant="small" onClick={handleUpload}>
            Повторить загрузку{' '}
          </Button>
        </div>
      )}
    </div>
  );
};

File.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  handleDeleteClick: PropTypes.func,
};

File.defaultProps = {};

export default memo(File);
