import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./OptionPopper.module.scss";
import ConfigOption from "../ConfigOption/index";
import Button from "../../../../components/Button";

const cx = classNames.bind(styles);

function OptionsPopper({ takeValue, valueDefault }) {
  const [value, setValue] = useState([]);
  const [optionList, setOptionList] = useState([]);
  const [id, setId] = useState(0);

  useEffect(() => {
    if (
      valueDefault &&
      Array.isArray(valueDefault) &&
      valueDefault.length > 0
    ) {
      const newOptionList = valueDefault.map((valueOptionPopper) => {
        const optionPopperId = valueOptionPopper.id;
        setId(optionPopperId);
        const option = {
          id: optionPopperId,
          component: (
            <ConfigOption
              typeDefault={valueOptionPopper.type}
              valueDefault={valueOptionPopper.productTypeItemDtoList}
              onTypeListChange={(value) => {
                handleSaveValue(value, optionPopperId);
              }}
            />
          ),
        };
        return option;
      });
      setOptionList(newOptionList);
    }
  }, [valueDefault]);

  const handleSaveValue = (valueLocation, idLocation) => {
    setValue((prevValue) => {
      const updatedValue = [...prevValue];
      updatedValue[idLocation] = {
        id: idLocation,
        value: valueLocation,
      };
      return updatedValue;
    });
  };

  const handelAddOption = () => {
    const newId = id + 1;

    const option = {
      id: newId,
      component: (
        <ConfigOption
          typeDefault={undefined}
          valueDefault={[]}
          onTypeListChange={(value) => {
            handleSaveValue(value, newId);
          }}
        />
      ),
    };
    setId(newId);

    const updatedOptionList = [...optionList, option];

    setOptionList(updatedOptionList);
  };

  const handleRemoveOption = (optionId) => {
    const updatedOptionList = optionList.filter(
      (option) => option.id !== optionId
    );
    setOptionList(updatedOptionList);
  };

  const renderOption = () => {
    return optionList.map((option) => {
      return (
        <div className="option" key={option.id}>
          <span
            className={cx("delete-btn")}
            onClick={() => handleRemoveOption(option.id)}
          >
            <FontAwesomeIcon icon={faTimes} />
          </span>
          {option.component}
        </div>
      );
    });
  };

  useEffect(() => {
    takeValue(value.filter(Boolean));
  }, [value]);

  return (
    <div className={cx("wrapper")}>
      <Button className={cx("add-btn")} onClick={handelAddOption}>
        Thêm lựa chọn
      </Button>
      {renderOption()}
    </div>
  );
}

export default OptionsPopper;
