import React from 'react'

function Courses() {
  return (
    <>
        <div className="row ">
          {allCourses.map((course) => (
            <div
              key={course.title}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
            >
              <div className="bg-dark text-white card h-100 shadow-sm">
                <img
                  src={course.image}
                  className="card-img-top"
                  alt={course.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{course.title}</h5>
                  <p className="card-text text-truncate">
                    {course.description}
                  </p>
                  <p className="fw-bold">💲 Price: ${course.price}</p>
                  <button
                    onClick={() => handleBuy(course._id)}
                    className="buy-btn btn btn-primary mt-auto"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </>
  )
}

export default Courses