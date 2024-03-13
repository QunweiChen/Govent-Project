import React, { useState, useEffect } from 'react';
import City from '@/data/event/str.json';

export default function Sidebar(props) {
  const categories = [
    '演唱會',
    '展覽',
    '快閃活動',
    '市集',
    '粉絲見面會',
    '課程講座',
    '體育賽事',
    '景點門票',
  ];

  const [selectedCategories, setSelectedCategories] = useState({});
  const [selectedRegions, setSelectedRegions] = useState({});

  useEffect(() => {
    const selectedCategoriesArray = Object.keys(selectedCategories).filter(
      (category) => selectedCategories[category]
    );
    const selectedCitiesArray = Object.keys(selectedRegions).filter(
      (cityId) => selectedRegions[cityId]
    );
    
    // 回傳選擇的篩選條件給父元素
    props.onFilterChange(selectedCategoriesArray, selectedCitiesArray);
  }, [selectedCategories, selectedRegions]);

  const handleOnChange = (category) => {
    const newSelectedCategories = {
      ...selectedCategories,
      [category]: !selectedCategories[category],
    };
    setSelectedCategories(newSelectedCategories);
  };

  const handleSelectAll = () => {
    const newSelection = {};
    if (!selectedCategories['所有類型']) {
      categories.forEach((cat) => (newSelection[cat] = true));
      newSelection['所有類型'] = true;
    } else {
      categories.forEach((cat) => (newSelection[cat] = false));
      newSelection['所有類型'] = false;
    }
    setSelectedCategories(newSelection);
  };

  const handleRegionCheckboxChange = (regionId, isChecked) => {
    setSelectedRegions((prevState) => ({
      ...prevState,
      [regionId]: isChecked,
    }));
  };

  return (
    <>
      <div className="upSidebar">
        <h6>活動種類</h6>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              checked={!!selectedCategories['所有類型']}
              onChange={handleSelectAll}
              id="flexCheckAll"
            />
            <label className="form-check-label" htmlFor="flexCheckAll">
              所有類型
            </label>
          </div>
          {categories.map((category, index) => (
            <div className="form-check" key={index}>
              <input
                className="form-check-input"
                type="checkbox"
                checked={!!selectedCategories[category]}
                onChange={() => handleOnChange(category)}
                id={`flexCheck${index}`}
              />
              <label
                className="form-check-label"
                htmlFor={`flexCheck${index}`}
              >
                {category}
              </label>
            </div>
          ))}
        </div>
      </div>
      <hr />
      <div className="downSidebar no-border">
        <h6>地區</h6>
        <div className="accordion" id="accordionExample">
          {City.map((region) => (
            <div
              key={region.id}
              className="accordion-item bg-bg-gray text-white"
            >
              <h2 className="accordion-header" id={`heading-${region.id}`}>
                <button
                  className="accordion-button p-1 gap-2 bg-bg-gray text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse-${region.id}`}
                  aria-expanded="true"
                  aria-controls={`collapse-${region.id}`}
                >
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={selectedRegions[region.id] || false}
                    onChange={(e) =>
                      handleRegionCheckboxChange(region.id, e.target.checked)
                    }
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`flexCheck-${region.id}`}
                  >
                    {region.name}
                  </label>
                </button>
              </h2>
              <div
                id={`collapse-${region.id}`}
                className="accordion-collapse collapse show"
                aria-labelledby={`heading-${region.id}`}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  {region.children.map((city) => (
                    <div key={city.id} className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`flexCheck-${city.id}`}
                        checked={selectedRegions[city.id] || false}
                        onChange={(e) =>
                          handleRegionCheckboxChange(city.id, e.target.checked)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`flexCheck-${city.id}`}
                      >
                        {city.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
