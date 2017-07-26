import React from 'react';

export default class SearchComponent extends React.Component {
    constructor(props){
        super(props);

        this.categories = [
            { id: '', value: '-- Select --' },
            { id: 'laptop', value: 'Laptop' },
            { id: 'desktop', value: 'Desktop' },
            { id: 'snp', value: 'S&P' }
        ];

        this.searchTypes = [
            { id: 'name', value: 'Name' },
            { id: 'category', value: 'Category' }
        ];

        this.state = {
            inputText: '',
            inputCategory: '',
            searchType: 'name'
        };
    }

    handleSearchInputChange = (event) => {
        event.preventDefault();

        const name = event.target.name;

        if (name)
            this.setState({[name]: event.target.value});
    };

    handleSearchTypeChange = (event) => {
      event.preventDefault();
      this.setState({searchType: event.target.value, inputText: '', inputCategory: ''});
    };

    handleSearchClick = (event) => {
        event.preventDefault();
        this.props.handleClick({
            searchInput: this.state.searchType === 'name' ? this.state.inputText : this.state.inputCategory,
            searchType: this.state.searchType
        });
    };

    render(){
        let searchInputType = null;
        if (this.state.searchType === 'name'){
            searchInputType = (
                <div className="row form-row form-group-sm">
                    <label className='col-md-3'>Search Input:</label>
                    <div className="col-md-9">
                        <input type="text" name="inputText" className="form-control input-sm" placeholder="Search"  value={this.state.inputText}
                               onChange={this.handleSearchInputChange} />
                    </div>
                </div>
            );
        } else {
            searchInputType = (
                <div className="row form-row form-group-sm">
                    <label className='col-md-3'>Category:</label>
                    <div className="col-md-9">
                        <select name="inputCategory" className="form-control input-sm" value={this.state.inputCategory}
                                onChange={this.handleSearchInputChange}>
                            {
                                this.categories.map(category => (<option key={category.id} value={category.id}>{category.value}</option>))
                            }
                        </select>
                    </div>
                </div>
            )
        }
        return (

            <form className="search">
                {searchInputType}

                <div className="row form-row form-group-sm">
                    <label className='col-md-3'>Search Type:</label>
                    <div className="col-md-9">
                        <select className="form-control input-sm" value={this.state.searchType} onChange={this.handleSearchTypeChange}>
                            {
                                this.searchTypes.map(searchType => (<option key={searchType.id} value={searchType.id}>{searchType.value}</option>))
                            }
                        </select>
                    </div>
                </div>

                <div className="row form-row form-group-sm">
                    <div className="col-md-4 col-md-offset-8">
                        <button type="button" className="btn btn-block" onClick={this.handleSearchClick}>Search</button>
                    </div>
                </div>
            </form>
        )
    };
}