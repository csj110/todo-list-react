import React, { Component } from 'react';

export default class TodoInput extends Component {
  render() {
    const { item, handleChage, handleSubmit, isEdit,inputTip } = this.props;
		return (
			<div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
					<div className="input-group">
						<div className="input-group-prepend">
							<div className="input-group-text bg-primary text-white">
								<i className="fas fa-book" />
							</div>
            </div>
            <input type="text"
              className='form-control text-capitalize'
              placeholder={inputTip}
              value={item}
              onChange={handleChage} />
          </div>
          <input type="submit"
            value={isEdit ? 'edit item' : 'add item'}
            className={`btn btn-block btn-${isEdit ? 'success' : 'primary'} mt-3 text-capitalize`}
          />
				</form>
			</div>
		);
	}
}
