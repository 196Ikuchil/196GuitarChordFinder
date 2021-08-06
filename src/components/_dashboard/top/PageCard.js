import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import PropTypes from 'prop-types';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styled } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)({
  maxWidth: 700
});

function PageCard({ img, pagename, description, path }) {
  return (
    <StyledCard variant="outlined">
      <ButtonBase component={Link} to={path}>
        <CardContent>
          <CardMedia className="pageimage" component="img" image={img} title="title" />
          <Typography gutterBottom variant="h3" component="h2">
            {pagename}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </ButtonBase>
    </StyledCard>
  );
}

PageCard.propTypes = {
  img: PropTypes.string.isRequired,
  pagename: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default PageCard;
